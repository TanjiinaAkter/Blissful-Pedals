const router = require("express").Router();

const {
  getUserOrdersGetController,
  getAllOrdersGetController,
  orderPostController,
  deleteOrderDeleteController,
  changeOrderStatusPutController,
} = require("../controllers/order");
// Admin auth middleware
const isAuthenticatedAdmin = require("../middlewares/adminAuth");

router.get("/all", getAllOrdersGetController);
router.get("/user/all", getUserOrdersGetController);

router.post("/confirm", orderPostController);
router.delete("/delete/:id", deleteOrderDeleteController);
router.put(
  "/status/:id",
  isAuthenticatedAdmin(),
  changeOrderStatusPutController
);

module.exports = router;
