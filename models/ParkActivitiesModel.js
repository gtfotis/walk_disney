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

    static async addActivity(user_id, activity_id, park_id) {
        try {
            console.log('ACTIVITY ID:', activity_id);
            console.log('PARK ID IS: ', park_id);
            const query = (`INSERT INTO plan (user_id, activity_id, parks_id) VALUES (${user_id}, ${activity_id}, ${park_id})`);
            const response = await db.result(query);
            return response;

        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = Activities;