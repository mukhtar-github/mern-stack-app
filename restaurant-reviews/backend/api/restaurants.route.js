import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
//import VehiclesInfoCtrl from "./vehicles_info.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

/*
router.route("/").get(VehiclesCtrl.apiGetVehicles)

router
    .route("/vehicles_info")
    .post(VehiclesInfoCtrl.apiPostVehicleInfo)
    .put(VehiclesInfoCtrl.apiUpdateVehicleInfo)
    .delete(VehiclesInfoCtrl.apiDeleteVehicleInfo)
*/

export default router
