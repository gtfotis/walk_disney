const db = require('./conn');

class Itinerary {
    constructor(id, user_id, parks_id, activity_id, food_id, lodging_id) {
        this.id = id;
        this.user_id = user_id;
        this.parks_id = parks_id;
        this.activity_id = activity_id;
        this.food_id = food_id;
        this.lodging_id = lodging_id;
    }

    static async getPlan(user_id) {
        try {
            const query = (`SELECT * FROM plan 
            INNER JOIN users on users.id = plan.user_id
            INNER JOIN parks on parks.id = plan.parks_id
            INNER JOIN activities on activities.id = plan.activity_id
            INNER JOIN food on food.id = plan.food_id
            WHERE plan.user_id = ${user_id};
            `)
            const response = await db.any(query)
            console.log('GET PLAN QUERY:', response)
            return response

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getLodging(user_id) {
        try {
            const query = (`SELECT * FROM plan INNER JOIN lodging on lodging.id = plan.lodging_id
            WHERE plan.user_id = ${user_id}
            ;`)
            const response = await db.any(query);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
      
}

module.exports = Itinerary;