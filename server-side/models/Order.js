const { model, Schema } = require("mongoose");
const shortid = require("shortid");

const date = new Date();
const strTypeRequiredField = {
  type: String,
  required: true,
};

const schema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  date: {
    type: String,
    default: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
  },
  status: strTypeRequiredField,
  fullname: strTypeRequiredField,
  address: strTypeRequiredField,
  phone: strTypeRequiredField,
  email: strTypeRequiredField,
  quantity: {
    type: Number,
    default: 1,
  },
  bicycle: { type: Schema.Types.String, ref: "Bicycle" },
});
const Order = new model("Order", schema);

module.exports = Order;
