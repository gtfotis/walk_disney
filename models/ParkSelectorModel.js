'use strict';
const db = require('./conn');

class ParkSelectorModel {
    constructor(id, user_id, parks_id, activity_id, food_id, lodging_id) {
        this.id = id;
        this.user_id = user_id;
        this.parks_id = parks_id;
        this.activity_id = activity_id;
        this.food_id = food_id;
        this.lodging_id = lodging_id;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM parks;`
            );
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM parks WHERE slug = '${slug}';`
            );
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getActivities(id) {
        try {
            const activitiesResponse = await db.any(
                `SELECT * FROM activities WHERE park_id = '${id}';`
            );
            return activitiesResponse;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async addParkId() {
        try {
            const query = (`INSERT INTO plan 
                (user_id, parks_id, activity_id, food_id, lodging_id) 
                VALUES 
                (${this.user_id}, ${this.parks_id}, ${this.activity_id}, ${this.food_id}, ${this.lodging_id}) 
                ;`);
            const response = await db.result(query);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ParkSelectorModel;