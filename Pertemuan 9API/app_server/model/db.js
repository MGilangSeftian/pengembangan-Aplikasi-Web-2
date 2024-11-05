
const mongoose = require("mongoose");
mongoose
  .connect(
    // online
    // "mongodb+srv://mdp:ub9ADGBkKh7BxHX2@cluster0.z8txo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb://localhost:27017/dbbuku"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    // console.error("App Starting error: ", err.stack);
    console.log("Connected failed");
  });