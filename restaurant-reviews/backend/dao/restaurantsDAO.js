let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) {
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.VIMAPP_NS).collection("restaurants")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in restaurantsDAO: ${e}`
            )
        }
    }

    static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20
    } = {}) {
        let query
        if (filters) {
            if ("vehicle_id" in filters) {
                query = { $text: { $search: filters["vehicle_id"] } }
            } else if ("model" in filters) {
                query = { "model": { $eq: filters["model"] } }
            } else if ("attached_to" in filters) {
                query = { "attached_to": { $eq: filters["attached_to"] } }
            }
        }

        let cursor

        try {
            cursor = await vehicles
            .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { vehiclesList: [], totalNumVehicles: 0 }
        }

        const displayCursor = cursor.limit(vehiclesPerPage).skip(vehiclesPerPage * page)

        try {
            const vehiclesList = await displayCursor.toArray()
            const totalNumVehicles = await vehicles.countDocuments(query)

            return { vehiclesList, totalNumVehicles }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { vehiclesList: [], totalNumVehicles: 0 }
        }
    }
}