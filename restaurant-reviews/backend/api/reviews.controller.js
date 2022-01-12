import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const restaurantId = req.body.restaurant_id
            const review = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const date = new Date()

            const ReviewResponse = await ReviewsDAO.addReview(
                restaurantId,
                userInfo,
                review,
                date
            )
            res.json({ status: "Success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateVehicleInfo(req, res, next) {
        try {
            const vehicleInfoId = req.body.vehicleInfo_id
            const updateInfo = {
                accident_history: req.body.accident_history,
                insurance_id: req.body.insurance_id,
                insurance_date: req.body.insurance_date,
                insurance_due: req.body.insurance_due
            }
            const date = new Date()

            const vehicleInfoResponse = await VehiclesInfoDAO.updateVehicleInfo(
                vehicleInfoId,
                req.body.user_id,
                updateInfo,
                date
            )

            var { error } = vehicleInfoResponse
            if (vehicleInfoResponse.modifiedCount === 0) {
                throw new Error(
                    "Unable to update info - user may not be original poster!"
                )
            }

            res.json({ status: "Success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteVehicleInfo(req, res, next) {
        try {
            const vehicleInfoId = req.query.id
            const userId = req.body.user_id
            console.log(vehicleInfoId)

            const vehicleInfoResponse = await VehiclesInfoDAO.deleteVehicleInfo(
                vehicleInfoId,
                userId
            )
            res.json({ status: "Success"})
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}
