const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const knex = require('../db/knex')        


router.get('/', (request, response) => {
    queries.getAllUsers().then(users => {
        response.json(users)
    })
})

router.get('/:id', (request, response, next) => {
    knex('user_trails')
        .innerJoin('users', 'users.id', 'user_trails.user_id')
        .innerJoin('trails', 'trails.id', 'user_trails.trail_id')
        .where('users.id', request.params.id)
        .then(users => {
            response.json({trails: users})
        })
    // queries.getOneUser(request.params.id).then(user => {
    //     if(user) {
    //         response.json(user)
    //     } else {
    //         next()
    //     }
    // })
})


  
module.exports = router