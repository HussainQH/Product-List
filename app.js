const express = require("express");
const connectDb = require("./database");
const cors = require("cors");
const path = require("path");

const productRouters = require("./apis/products/routes");
const categoriesRoutes = require("./apis/categories/routers");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next();
});

app.use(cors());
app.use("/api/products", productRouters);
app.use("/api/categories", categoriesRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

const PORT = 8000;
connectDb();

app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
