import express from 'express';
import {login} from '../controllers/auth.js';
router.post('/login', login);

const router = express.Router();