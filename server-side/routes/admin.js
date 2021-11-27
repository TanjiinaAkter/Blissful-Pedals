const router = require("express").Router();
const {
  adminLoginPostController,
  adminLoginVerify,
  adminSignupPostController,
  getAllAdminsGetController,
  deleteAdminsDeleteController,
} = require("../controllers/admin");
const isAuthenticatedAdmin = require("../middlewares/adminAuth");
router.post("/login", adminLoginPostController);
router.get("/login/verify", adminLoginVerify);

router.get("/all", isAuthenticatedAdmin(), getAllAdminsGetController);
router.post("/signup", isAuthenticatedAdmin(), adminSignupPostController);
router.delete("/:id", isAuthenticatedAdmin(), deleteAdminsDeleteController);

module.exports = router;
