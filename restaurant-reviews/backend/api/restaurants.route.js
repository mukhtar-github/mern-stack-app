import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
//import VehiclesInfoCtrl from "./vehicles_info.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router
