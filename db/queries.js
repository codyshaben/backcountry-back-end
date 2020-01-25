const knex = require('./knex')

module.exports = {
    getAllUsers(){
        return knex('users')
    },
    getOneUser(id){
        return knex('users').where('id', id).first()
    },
    getAllTrails(){
        return knex('trails')
    },
    createUsertrails(usertrail) {
        return knex('user_trails').insert(usertrail, '*')
    },
    getAllUsertrails(){
        return knex('user_trails')
    },
    createTrail(trail){
        return knex('trails').insert(trail, '*')
    },    
}