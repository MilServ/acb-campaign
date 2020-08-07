require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// To prevent Access-Control-Allow-Origin errors
const cors = require("cors");
const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
};

//Routes to be used in future versions
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");
// const signupsRoutes = require("./routes/signups");
// const buyersRoutes = require("./routes/buyers");
const demoRoutes = require("./routes/demo");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Activating Passport authentication for Version 2
//Passport Middleware
// const passport = require("passport");
// app.use(passport.initialize());
// require("./config/passport")(passport);

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

//Allow Cross Domain to prevent CORS errors
app.use(cors());
app.use(allowCrossDomain);

//routes middleware
app.use("/api", demoRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
