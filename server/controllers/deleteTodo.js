const todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: result,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
