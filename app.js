const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.js

// ... existing code ...

// Endpoint to get user details
app.get("/profile/:email", async (req, res) => {
    const { email } = req.params;
  
    try {
      const user = await collection.findOne({ email });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // Endpoint to update user details
  app.put("/profile/:email", async (req, res) => {
    const { email } = req.params;
    const { age, phoneNumber, bloodGroup } = req.body;
  
    try {
      const updatedUser = await collection.findOneAndUpdate(
        { email },
        { $set: { age, phoneNumber, bloodGroup } },
        { new: true }
      );
  
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (e) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  // ... existing code ...
  
  