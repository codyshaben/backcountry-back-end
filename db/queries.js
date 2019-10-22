const knex = require('./knex')

module.exports = {
    getAllUsers(){
        return knex('users')
    },
    getOneUser(id){
        return knex('users').where('id', id).first()
    },
    // getAllTrails(){
    //     return knex('trails')
    // }
}