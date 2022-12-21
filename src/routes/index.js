const router = require("express").Router();
const { responseNotFound } = require("../utils/response.util");
const userRoute = require("./user.route");

router.use("/user", userRoute);

router.all("*", (req, res) => responseNotFound(res));

module.exports = router;
