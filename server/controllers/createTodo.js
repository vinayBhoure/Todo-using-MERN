const todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    //extracting data from req body
    const { title, description } = req.body;
    //feeding it into database
    const response = await todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "entry created succesfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "initaial server error",
      message: err.message,
    });
  }
};
