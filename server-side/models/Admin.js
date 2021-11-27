const { model, Schema } = require("mongoose");

const schema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = new model("Admin", schema);

module.exports = Admin;
