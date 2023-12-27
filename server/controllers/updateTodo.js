const todo = require("../models/todo");
const mongoose = require("mongoose");

exports.updateTodo = async (req, res) => {
    try{
         const { id } = req.params;
         const { title, description } = req.body;

            if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No todo with that id");

            const updatedTodo = { title, description, _id: id };
            const newdata = await todo.findByIdAndUpdate(id, updatedTodo, { new: true }).exec();
            res.status(200).json({
                success: true,
                data: newdata,
                message: "Todo updated successfully",
            });

    }catch(error){
        res.status(404).json({ message: error.message });
    }
}