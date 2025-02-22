import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User'; // Assuming you have a User model defined
import { generateToken } from '../utils/jwt';

class AuthController {
    async register(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = generateToken(user.id);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }

    async getProfile(req: Request, res: Response) {
        const userId = req.user.id; // Assuming user ID is stored in req.user

        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ username: user.username });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user profile', error });
        }
    }
}

export default new AuthController();