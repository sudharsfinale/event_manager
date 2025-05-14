// Import required modules
const express = require('express'); // Web framework to create API routes
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing
const dotenv = require('dotenv'); // Loads environment variables from .env file
const todoRoutes = require('./routes/todo_routes'); // Import our custom routes for todos

// Load environment variables (e.g., MongoDB URI)
dotenv.config();

// Initialize the Express application
const app = express();

// Define the port number for the server
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Allow requests from other origins (like frontend on different port)
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected')) // Log success
  .catch(err => console.error('❌ MongoDB Error:', err)); // Log error if any

// Mount the /api/todos route to handle all todo-related requests
app.use('/api/todos', todoRoutes);

// Start the server and listen for requests
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
