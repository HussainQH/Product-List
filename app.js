const express = require("express");
const connectDb = require("./database");

const productRouters = require("./apis/products/routes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:${PORT}${req.originalUrl}`
  );

  next();
});

app.use("/api/products", productRouters);

const PORT = 8000;
connectDb();

app.use((req, res, next) => {
  if (productRouters === "/api/products") {
    next();
  } else {
    res.status(404).json({ message: "Path Not Found" });
  }
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
