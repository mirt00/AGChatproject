import express from 'express';
import { getUser, getUserFriends, addRemoveFriend } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser); // Get user by ID
router.get("/:id/friends", verifyToken, getUserFriends); // Get user friends
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); // Add or remove friend

/** update */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); 

export default router;