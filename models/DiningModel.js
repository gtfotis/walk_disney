const db = require('./conn');

class Dining {
    constructor(id) {
        this.id = id;
    }

    static async getDining(park_id) {
        try {
            const query = (`SELECT * FROM food WHERE park_id = ${park_id};`);
            console.log(query);
            const response = await db.any(query);
            console.log(response);
            return response; 

        } catch(error) {
            console.error('ERROR: ', error);
            return error; 
        }
    }

    static async addDining(plan_id, food_id) {
        try {
            console.log('PLAN ID: ', plan_id);
            console.log('FOOD ID: ', food_id);
            const query = (`UPDATE plan set food_id = ${food_id} WHERE id = ${plan_id};`);
            const response = await db.result(query);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}


module.exports = Dining;