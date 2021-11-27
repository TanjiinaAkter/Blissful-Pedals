const { model, Schema } = require("mongoose");
const shortid = require("shortid");

const strTypeRequiredField = {
  type: String,
  required: true,
};

const schema = new Schema({
  img: String,
  name: strTypeRequiredField,
  description: strTypeRequiredField,
  ratings: {
    type: Number,
    required: true,
  },
  bicycle: {
    type: Schema.Types.String,
    ref: "Bicycle",
  },
  uid: strTypeRequiredField,
});

const Review = new model("Review", schema);

module.exports = Review;
