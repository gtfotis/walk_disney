const db = require('./conn')
const bcrypt = require('bcryptjs')

class UsersModel {
    constructor(id, first_name, last_name, user_email, user_password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = user_email;
        this.password = user_password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
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

    async login() {
        try {
            // Lookup the user by their email address
            const query = `SELECT * FROM users WHERE user_email = '${this.email}'`;
            const response = await db.one(query);
            console.log(this.password)

            // Check the user's password based on the hash
            console.log("LOGIN RESPONSE OBJECT: ", response);
            const isValid = this.checkPassword(response.user_password);
            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, user_id: id, first_name, last_name }
            } else {
                return { isValid }
            }

            // return a response to the controller, either valid or not

        } catch (error) {
            console.error("ERROR: ", error)
            return error;
        }
    }
}

module.exports = UsersModel