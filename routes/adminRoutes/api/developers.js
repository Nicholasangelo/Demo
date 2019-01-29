//Key Dependencies
const path = require("path");
const router = require("express").Router();
const developersController = require("../../../controllers/developersController");

//API Routes

//Create a new project
router
.route("/api/developers")
.post(developersController.create);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    console.log("Im in developer.js")
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;