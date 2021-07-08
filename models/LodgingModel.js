const db = require('./conn')

class Lodging {
    constructor(id) {
        this.id = id;
    }

    static async getLodging(park_id) {
        try {
            const query = (`SELECT * FROM lodging WHERE park_id = ${park_id};`);
            const response = await db.any(query);
            console.log('LODGING RESPONSE', response);
            return response
        } catch(error) {
            console.error('ERROR:', error);
            return error;
        }
    };

    static async addLodging(plan_id, lodging_id) {
        try {
            console.log('PLAN ID:', plan_id);
            console.log('LODGING ID:', lodging_id);
            const query = (`UPDATE plan set lodging_id = ${lodging_id} WHERE id = ${plan_id};`);
            const response = await db.result(query);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;   
        }
    }
}

module.exports = Lodging;