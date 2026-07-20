const dns = require("dns");

// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Connect to MongoDB
connectDB();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("authRoutes:", authRoutes);
console.log("userRoutes:", userRoutes);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 MedAssist Backend is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});