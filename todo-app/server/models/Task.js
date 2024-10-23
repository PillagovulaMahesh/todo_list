const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces from the beginning and end
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
