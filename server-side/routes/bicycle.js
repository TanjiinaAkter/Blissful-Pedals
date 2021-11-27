const router = require("express").Router();

const {
  getSingleBicycleGetController,
  getAllBicycleGetController,
  addBicyclePostController,
  updateBicyclePutController,
  deleteBicycleDeleteController,
} = require("../controllers/bicycle");

// Auth middleware to verify admin
const isAuthenticatedAdmin = require("../middlewares/adminAuth");

router.get("/single/:id", getSingleBicycleGetController);
router.get("/all", getAllBicycleGetController);
router.post("/add", isAuthenticatedAdmin(), addBicyclePostController);
router.put("/update/:id", isAuthenticatedAdmin(), updateBicyclePutController);
router.delete(
  "/delete/:id",
  isAuthenticatedAdmin(),
  deleteBicycleDeleteController
);

module.exports = router;
