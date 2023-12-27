const express = require("express");
const router = express.Router();

const {getTodo} = require("../controllers/getTodo")
const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { updateTodo } = require("../controllers/updateTodo");

router.post("/create", createTodo);
router.get("/get", getTodo);
router.post("/delete/:id", deleteTodo)
router.post("/update/:id", updateTodo)

module.exports = router;
