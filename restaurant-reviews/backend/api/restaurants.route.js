import express from "express"
import VehiclesCtrl from "./vehicles.controller.js"
import VehiclesInfoCtrl from "./vehicles_info.controller.js"

const router = express.Router()

router.route("/").get((req, res) => res.send("Hello World"))

/*
router.route("/").get(VehiclesCtrl.apiGetVehicles)

router
    .route("/vehicles_info")
    .post(VehiclesInfoCtrl.apiPostVehicleInfo)
    .put(VehiclesInfoCtrl.apiUpdateVehicleInfo)
    .delete(VehiclesInfoCtrl.apiDeleteVehicleInfo)
*/

export default route
