import express from 'express';
import upload from '../middleware/upload.js';
import {
  getProperties,
  getFeaturedProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  deletePropertyImage,
  searchProperties
} from '../Controllers/PropertyController.js';

const router = express.Router();

// Get all properties
router.get('/', getProperties);

// Search properties
router.get('/search', searchProperties);

// Get featured properties
router.get('/featured', getFeaturedProperties);

// Get property by ID
router.get('/:id', getPropertyById);

// Create a new property with image upload
router.post('/', upload.array('images', 10), createProperty);

// Update a property with image upload
router.put('/:id', upload.array('images', 10), updateProperty);

// Delete a property
router.delete('/:id', deleteProperty);

// Delete an image from a property
router.delete('/:id/images/:imageIndex', deletePropertyImage);

export default router;