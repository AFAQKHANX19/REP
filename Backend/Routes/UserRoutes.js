import express from 'express';
import multer from 'multer';
import path from 'path';
import { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser,
  deleteUserImage
} from '../Controllers/UserController.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/users/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'user-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Routes
router.route('/')
  .get(getUsers)
  .post(upload.array('images', 5), createUser);

router.route('/:id')
  .get(getUserById)
  .put(upload.array('images', 5), updateUser)
  .delete(deleteUser);

router.route('/:id/images/:imageIndex')
  .delete(deleteUserImage);

export default router;