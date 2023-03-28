// require the mongoose DB
const mongoose = require('mongoose');

// creating Schema for Task
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});


const Task = mongoose.model('Task', taskSchema);

// exporting the Schema task
module.exports = Task;