require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const setRoutes = require("./routes");
const cors = require("cors");
// Initialize app
const app = express();

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hyuyo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


const PORT = process.env.PORT || 8080;

// To enable cors for accessing our API from anywhere
app.use(cors());
// I have used build-in methods for parsing data from the request body instead of the body-parser package.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Blissful Pedals",
  });
});

// Set Routes
setRoutes(app);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`);
    });
  } catch (error) {
    console.log("Database error occurred!", error);
  }
};
startApp();
