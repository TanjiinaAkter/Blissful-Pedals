const router = require("express").Router();

const {
  getReviewsGetController,
  addReviewPostController,
} = require("../controllers/review");

router.get("/", getReviewsGetController);
router.post("/add/:uid", addReviewPostController);

module.exports = router;
