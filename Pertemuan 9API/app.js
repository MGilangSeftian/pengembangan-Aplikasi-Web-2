var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bukusRouter = require("./routes/bukus");

const mongoose = require ("mongoose");

//CORS ENABLED
//CROSS Origin Resouce Sharing
var app = express();

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-0rigin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET, POST, PATCH, DELETE, APTIONS"
  );
  next();
});

mongoose.connect(
  // online
  "mongodb+srv://mdp:8BXHlc4xNSaMCSe1@cluster0.z8txo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  // "mongodb://localhost:27017/dbbuku"
).then(()=>{
  console.log("Connected to database");
}).catch(()=>{
  // console.error("App Starting error: ", err.stack);
  console.log("Connected failed");
});



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/buku", bukusRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
