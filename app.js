const express = require("express");
const productRouters = require("./apis/products/routes");

const app = express();

app.use(express.json());

app.use("/api/products", productRouters);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

module.exports = app;
