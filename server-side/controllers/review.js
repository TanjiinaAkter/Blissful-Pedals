const Review = require("../models/Review");
const Bicycle = require("../models/Bicycle");
// Get reviews
exports.getReviewsGetController = async (req, res) => {
  const { uid } = req.query;
  try {
    let reviews = [];

    if (uid) {
      reviews = await Review.find({ uid }).populate({
        path: "bicycle",
        select: "name img",
      });
    } else {
      reviews = await Review.find().populate({
        path: "bicycle",
        select: "name img",
      });
    }

    res.status(200).json({ reviews });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// To add the review data by user
exports.addReviewPostController = async (req, res) => {
  // Data extracted from the body of the request
  const { img, name, description, ratings, bicycle } = req.body;
  const { uid } = req.params;
  // Simple validation for input data
  if (!name || !description || !ratings || !bicycle) {
    return res.status(403).json({
      message: "Must have to provide all required fields to add a review",
    });
  }
  const hasBicycle = await Bicycle.findOne({ _id: bicycle });
  if (!hasBicycle) {
    return res.status(404).json({
      message: "This item is not available in DB",
    });
  }
  try {
    const hasReview = await Review.findOne({ uid, bicycle });
    if (hasReview) {
      return res
        .status(403)
        .json({ message: "You have already rated this bicycle" });
    }
    const addReview = new Review({
      img: img || "",
      name,
      description,
      ratings,
      bicycle,
      uid,
    });
    const addedReview = await addReview.save();

    const rateName = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
    };
    await Bicycle.findOneAndUpdate(
      { _id: hasBicycle._id },
      {
        ratings: {
          ...hasBicycle.ratings,
          [rateName[ratings]]: hasBicycle.ratings[rateName[ratings]] + 1,
        },
      },
      { new: true }
    );
    res.status(201).json({
      message: "Successfully added new review!",
      review: addedReview,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
