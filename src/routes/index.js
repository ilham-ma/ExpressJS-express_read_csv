const router = require("express").Router();
const { responseNotFound } = require("../utils/response.util");
const userRoute = require("./user.route");
const csvRoute = require("./csv.route");

router.use("/user", userRoute);
router.use("/csv", csvRoute);

router.all("*", (req, res) => responseNotFound(res));

module.exports = router;
