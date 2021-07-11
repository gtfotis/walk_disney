const db = require('./conn');

class Dining {
    constructor(id) {
        this.id = id;
    }

    static async getDining(park_id) {
        try {
            const query = (`SELECT * FROM food WHERE park_id = ${park_id};`);
            const response = await db.any(query);
            return response; 

        } catch(error) {
            console.error('ERROR: ', error);
            return error; 
        }
    }

    static async addDining(user_id, food_id, parks_id) {
        try {
            const query = (`INSERT INTO plan (user_id, food_id, parks_id) VALUES (${user_id}, ${food_id}, ${parks_id});`);
            const response = await db.result(query);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
};


module.exports = Dining;