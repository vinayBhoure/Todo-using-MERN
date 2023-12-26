const mongoose = require("mongoose");

require("dotenv").config();
console.log(process.env.DATABASE_URL)

const db = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connection established"))
    .catch((error) => {
      console.log("error recieved while connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = db;
