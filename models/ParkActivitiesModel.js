const db = require('./conn');

class Activities {
    constructor(id, activity_id) {
        this.id = id;
        this.activity_id = activity_id;
    }

    static async getActivities(park_id) {
        try {
            const query = (`SELECT * FROM activities WHERE park_id = ${park_id};`);
            const response = await db.any(query);
            return response

        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async addActivity(plan_id, activity_id) {
        try {
            console.log('PLAN ID:', plan_id);
            console.log('ACTIVITY ID:', activity_id);
            const query = (`UPDATE plan set activity_id = ${activity_id} WHERE id = ${plan_id}`);
            const response = await db.result(query);
            return response;

        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = Activities;