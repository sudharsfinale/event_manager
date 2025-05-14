const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

// Define the structure of a Todo document using a Mongoose schema
const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4(), // ✅ function that returns a string
  },
  text: {
    type: String, // Task description
    required: true, // Cannot be empty
  },
  status: {
    type: String,
    default: "to-do", // Initially, the task is not completed
  },
});

// Export the model to use in our routes
module.exports = mongoose.model("Todo", TodoSchema);
