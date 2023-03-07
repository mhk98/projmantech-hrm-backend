const router = require("express").Router();
const Profile_Information = require("../../controllers/Profile_Information/profile_information.controller");
const { upload } = require("../../middlewares/upload");

router.post("/", Profile_Information.profile_information);
router.get("/:id", Profile_Information.single_profile_information);
router.patch("/:id", upload, Profile_Information.profile_information_update);
// router.get("/", Add_Employee.getAllEmployee)

module.exports = router;
