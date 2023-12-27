const todo = require("../models/todo")

exports.getTodo = async (req, res) => {
    try{
        const data = await todo.find({}).exec()
        // console.log(data)
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (err) { 
        console.error(err)
        res.status(500).json({
            success: false,
            data: "initaial server error",
            message: err.message,
        });
    }
}