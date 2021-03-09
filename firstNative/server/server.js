const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

// deklari app express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect("mongodb://localhost:27017/firstNative", connectionOptions)
  .then(console.log("Connect to database"))
  .catch((err) => {
    console.log("Connection error", err);
    process.exit();
  });

app.use("/api/employee", require("./routes/employee.routes"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to wkwklan" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
