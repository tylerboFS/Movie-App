const router = require("express").Router();


router.get("/", (req, res) => {
  res.send("Welcome to the movie routes");
})

module.exports = router;