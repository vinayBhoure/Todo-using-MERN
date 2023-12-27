const express = require("express");
const app = express();
const cors = require("cors");

// sending .env data to proess object
require("dotenv").config();

const Port = process.env.PORT || 4000;  
console.log(Port) 

//initialing server on port
app.listen(Port, () => console.log("server is started on port:", Port));

// middle ware  for parsing data
app.use(express.json());

// importing route
const todoRoute = require("./routes/todo");

//creating a route
app.use("/todo", todoRoute);


// connection of db
const dbConnect = require("./config/database");

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This is the home page</h1>`);
});
