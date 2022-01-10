import RestaurantsDAO from "../dao/restaurantsDAO.js"

export default class RestaurantsController {
    static async apiGetRestaurants(req, res, next) {
        const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.model) {
            filters.model = req.query.model
        } else if (req.query.attached_to) {
            filters.attached_to = req.query.attached_to
        } else if (req.query.vehicle_id) {
            filters.vehicle_id = req.query.vehicle_id
        }

        const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getrestaurants({
            filters,
            page,
            restaurantsPerPage
        })

        let response = {
            restaurants: restaurantsList,
            page: page,
            filters: filters,
            entries_per_page: restaurantsPerPage,
            total_results: totalNumrestaurants
        }
        res.json(response)
    }
}
