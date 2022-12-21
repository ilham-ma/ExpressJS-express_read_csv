require("module-alias/register");
const router = require("express").Router();
const { readController } = require("@controllers/csv.controller");

router.post("/read", readController);

module.exports = router;
