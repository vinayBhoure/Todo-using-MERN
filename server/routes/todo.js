const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");

router.post("/create", createTodo);

module.exports = router;
