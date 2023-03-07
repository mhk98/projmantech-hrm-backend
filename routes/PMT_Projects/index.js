const router = require("express").Router();
const Projects = require("../../controllers/PMT_Projects/pmt_projects.controller")

router.post("/", Projects.projectsInsert);
router.patch("/:id", Projects.projectsUpdate);
router.delete("/:id", Projects.projectsDelete);
router.get("/", Projects.getAllProjects);
router.get("/:id", Projects.searchingIndividualProject);
router.get("/client/:id", Projects.searchingClientProject);
router.post("/count", Projects.projectCount);
router.get("/developing/", Projects.allDevelopingProject);
router.get("/test/", Projects.allTestProject);
router.get("/deployed/", Projects.allDeployedProject);



module.exports = router;