require("module-alias/register");
const router = require("express").Router();
const {
  registerController,
  loginController,
  profileController,
} = require("@controllers/user.controller");
const {
  authorizedMiddleware,
  loginMiddleware,
} = require("@middlewares/user.middleware");

router.post("/register", registerController);
router.post("/login", loginMiddleware, loginController);
router.get("/profile", authorizedMiddleware, profileController);

module.exports = router;
