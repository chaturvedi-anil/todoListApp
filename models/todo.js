const mongoose = require('mongoose');

// creating schema
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    dueDate:
    {
        type: Date,
        required: true
    }
});

// creating model 
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;