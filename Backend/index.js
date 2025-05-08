// Modify the index.js file to properly handle paths in ES modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import propertyRoutes from "./Routes/PropertyRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import userRoutes from "./Routes/UserRoutes.js";


const app = express();
app.use(bodyParser.json());
app.use(cors());

// ES Modules path handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create users uploads directory
const usersUploadsDir = path.join(__dirname, 'uploads/users');
if (!fs.existsSync(usersUploadsDir)) {
  fs.mkdirSync(usersUploadsDir, { recursive: true });
}

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Connect to MongoDB
const url =
  "mongodb+srv://esha:esha2002@eshakhan.eeh341o.mongodb.net/REP-MASTER?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("Connected to the database.");
});

// Make uploads folder static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/properties', propertyRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));