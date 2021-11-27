const bicycleRoutes = require("./bicycle");
const orderRoutes = require("./order");
const adminRoutes = require("./admin");
const reviewRoutes = require("./review");
const paths = [
  {
    path: "bicycle",
    controller: bicycleRoutes,
  },
  {
    path: "review",
    controller: reviewRoutes,
  },
  {
    path: "order",
    controller: orderRoutes,
  },
  {
    path: "admin",
    controller: adminRoutes,
  },
];

module.exports = (app) => {
  paths.forEach(({ path, controller }) => {
    app.use(`/api/${path}`, controller);
  });
};
