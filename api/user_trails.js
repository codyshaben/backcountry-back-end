const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const knex = require('../db/knex') 

router.post('/', (request, response) => {
    queries.createUsertrails(request.body).then(usertrails => {
        response.json(usertrails[0])
    })
})

router.get('/', (request, response) => {
    queries.getAllUsertrails().then(usertrails => {
        response.json(usertrails)
    })
})




module.exports = router