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
            FULL JOIN parks on parks.id = plan.parks_id
            FULL JOIN activities on activities.id = plan.activity_id
            FULL JOIN food on food.id = plan.food_id
            WHERE plan.user_id = ${user_id};
            `)
            const response = await db.any(query)
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
    

    static async removeActivity(activity_id) {
        try {
            // Sets to null so the lodging is unaffected
            const query = (`
            UPDATE plan SET parks_id = null, activity_id = null, food_id = null WHERE activity_id = ${activity_id};
            `);
            console.log(query);
            const response = await db.any(query);
            return response;
            
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async removeLodging(lodging_id) {
        try {
            //Sets to null in case they only want to delete lodging.
            const query = (`UPDATE plan SET lodging_id = null WHERE lodging_id = ${lodging_id};`);
            const response = await db.any(query);
            return response;


        } catch(error) {
            console.error('ERROR: ', error)
            return error;
        }
    }
      
}

module.exports = Itinerary;