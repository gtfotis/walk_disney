const db = require('./connect')
const bcrypt = require('bcryptjs')

class Users {
    constructor(id, first_name, last_name, user_email, user_password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = user_email;
        this.password = user_password;
    }

    static async addUser(first_name, last_name, user_email, user_password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, user_email, user_password) 
                VALUES ('${first_name}', '${last_name}', '${user_email}', '${user_password}') RETURNING id;`
            const response = await db.one(query)
            return response

        } catch (error) {
            console.error("ERROR: ", error)
            return error;
        }
    }

}