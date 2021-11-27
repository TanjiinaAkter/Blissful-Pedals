const Bicycle = require("../models/Bicycle");
const Review = require("../models/Review");

// Get single bicycle
exports.getSingleBicycleGetController = async (req, res) => {
  const { id } = req.params;
  try {
    const bicycle = await Bicycle.findOne({ _id: id });
    res.status(200).json({ bicycle });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// Get all bicycle
exports.getAllBicycleGetController = async (req, res) => {
  try {
    const bicycles = await Bicycle.find();

    res.status(200).json({ bicycles });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// Only admin bicycle can be adding and this controller is only accessible to admin
exports.addBicyclePostController = async (req, res) => {
  // Data extracted from the body of the request
  const { name, price, model, stockStatus, description, features, img } =
    req.body;

  // Simple validation for input data
  if (
    !name ||
    !price ||
    !model ||
    !stockStatus ||
    !description ||
    !features ||
    !img
  ) {
    return res.status(403).json({
      message: "Must have to provide all required fields to add a product",
    });
  }
  try {
    // Create a bicycle
    const createBicycle = await new Bicycle({
      name,
      price,
      model,
      stockStatus,
      description,
      features,
      img,
    });
    const createdBicycle = await createBicycle.save();
    res.status(201).json({
      message: "Successfully added new bicycle!",
      bicycle: createdBicycle,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// To update bicycle data by admin
exports.updateBicyclePutController = async (req, res) => {
  // Data extracted from the body of the request and also exracted id from params
  const { name, price, model, stockStatus, description, features, img } =
    req.body;
  const { id } = req.params;
  try {
    const hasBicycle = await Bicycle.findOne({ _id: id });
    if (!hasBicycle) {
      return res
        .status(503)
        .json({ message: "Currently, this bicycle is not available in DB" });
    }
    const updatedBicycle = await Bicycle.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name: name || hasBicycle.name,
        price: price || hasBicycle.price,
        model: model || hasBicycle.model,
        stockStatus: stockStatus || hasBicycle.stockStatus,
        description: description || hasBicycle.description,
        features: features || hasBicycle.features,
        img: img || hasBicycle.img,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully updated bicycle!",
      bicycle: updatedBicycle,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// To delete bicycle from the DB by admin
exports.deleteBicycleDeleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const hasBicycle = await Bicycle.findOne({ _id: id });
    if (!hasBicycle) {
      return res
        .status(503)
        .json({ message: "Currently, this bicycle is not available in DB" });
    }
    await Bicycle.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Successfully deleted bicycle!" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
