import Users from '../Models/Users.js';
import fs from 'fs';
import path from 'path';

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Public
const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a user
// @route   POST /api/users
// @access  Private
const createUser = async (req, res) => {
  try {
    const {
      title,
      designation,
      description,
    } = req.body;

    // Handle file uploads
    const images = req.files ? req.files.map(file => file.path) : [];

    const user = new Users({
      title,
      designation,
      description,
      images,
    });

    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fields to update
    const {
      title,
      designation,
      description,
      isActive,
    } = req.body;

    // Handle uploaded images
    let images = user.images;
    
    if (req.files && req.files.length > 0) {
      // Add new images to existing ones
      const newImages = req.files.map(file => file.path);
      images = [...images, ...newImages];
    }

    // Update user fields
    user.title = title || user.title;
    user.designation = designation || user.designation;
    user.description = description || user.description;
    user.images = images;
    user.isActive = isActive !== undefined ? isActive === 'true' : user.isActive;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete associated images from filesystem
    user.images.forEach((image) => {
      const imagePath = path.join(process.cwd(), image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    });

    await user.deleteOne();
    res.status(200).json({ message: 'User removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an image from a user
// @route   DELETE /api/users/:id/images/:imageIndex
// @access  Private
const deleteUserImage = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const imageIndex = parseInt(req.params.imageIndex);
    
    if (imageIndex < 0 || imageIndex >= user.images.length) {
      return res.status(400).json({ message: 'Invalid image index' });
    }

    // Delete the image file
    const imagePath = path.join(process.cwd(), user.images[imageIndex]);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Remove image from array
    user.images.splice(imageIndex, 1);
    
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteUserImage
};