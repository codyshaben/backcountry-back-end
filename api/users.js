const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (request, response) => {
    queries.getAll().then(users => {
        response.json(users)
    })
})


router.get('/:id', (request, response, next) => {
    queries.getOne(request.params.id).then(user => {
        if(user) {
            response.json(user)
        } else {
            next()
        }
    })
})
  





module.exports = router