'use strict';
const db = require('./conn');

class ParkSelectorModel {
    constructor(id, park_name, park_description) {
        this.id = id;
        this.park_name = park_name;
        this.park_description = park_description;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM parks;`
            );
            console.log(response);
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
            const activitiesResponse = await db.one(
                `SELECT * FROM activities WHERE park_id = '${id}';`
            );
            console.log(activitiesResponse);
            return activitiesResponse;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ParkSelectorModel;