import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

// User registration endpoint
router.post('/register', registerUser);

// User login endpoint
router.post('/login', loginUser);

import { Request, Response, NextFunction } from 'express';

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {