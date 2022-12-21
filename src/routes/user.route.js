require("module-alias/register");
const router = require("express").Router();
const { registerController } = require("@controllers/user.controller");

router.post("/register", registerController);

module.exports = router;
