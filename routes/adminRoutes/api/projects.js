//Key Dependencies
const path = require("path");
const router = require("express").Router();
const projectsController = require("../../../controllers/projectsController");

//API Routes

//Create a new project
router
.route("/api/projects")
.post(projectsController.create);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    console.log("Im in projects.js");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
