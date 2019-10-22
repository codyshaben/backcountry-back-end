const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (request, response) => {
    queries.getAllUsers().then(users => {
        response.json(users)
    })
})

router.get('/:id', (request, response, next) => {
    queries.getOneUser(request.params.id).then(user => {
        if(user) {
            response.json(user)
        } else {
            next()
        }
    })
})
  
module.exports = router