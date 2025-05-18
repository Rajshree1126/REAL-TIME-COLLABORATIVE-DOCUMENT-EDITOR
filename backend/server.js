// Import required modules
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketio = require("socket.io");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketio(server, {
  cors: { origin: "*" }, // Allow requests from any origin (CORS policy)
});

// Connect to MongoDB using connection string from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema for collaborative document storage
const DocumentSchema = new mongoose.Schema({
  _id: String,   // Document ID
  data: String,  // Document content
});

// Create model from the schema
const Document = mongoose.model("Document", DocumentSchema);

// Handle WebSocket connections
io.on("connection", (socket) => {
  // Listen for a client requesting a document by ID
  socket.on("get-document", async (id) => {
    // Try to find the document in the database
    let document = await Document.findById(id);
    
    // If document doesn't exist, create a new one
    if (!document) {
      document = await Document.create({ _id: id, data: "" });
    }

    // Join the room with the document ID
    socket.join(id);

    // Send the current document data to the client
    socket.emit("load-document", document.data);

    // Listen for changes made by this client and broadcast them to others
    socket.on("send-changes", (delta) => {
      socket.to(id).emit("receive-changes", delta);
    });

    // Save the document data to MongoDB
    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(id, { data });
    });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
