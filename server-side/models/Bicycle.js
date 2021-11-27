const { model, Schema } = require("mongoose");
const shortid = require("shortid");

const strTypeRequiredField = {
  type: String,
  required: true,
};
const rateType = {
  type: Number,
  default: 0,
};
const schema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  name: strTypeRequiredField,
  price: {
    type: Number,
    required: true,
  },
  model: strTypeRequiredField,
  stockStatus: strTypeRequiredField,
  description: strTypeRequiredField,
  img: strTypeRequiredField,
  features: strTypeRequiredField,
  ratings: {
    one: rateType,
    two: rateType,
    three: rateType,
    four: rateType,
    five: rateType,
  },
});

const Bicycle = new model("Bicycle", schema);

module.exports = Bicycle;
