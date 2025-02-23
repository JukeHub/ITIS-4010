import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../utils/db';

// Registration endpoint
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        // Hash the password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        const result = await pool.query(
            `INSERT INTO users (username, email, password)
             VALUES ($1, $2, $3) RETURNING id, username, email`,
            [username, email, hashedPassword]
        );

        return res.status(201).json(result.rows[0]);
    } catch (error: any) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: error.message });
    }
};

// Login endpoint function
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Look up the user by email
        const result = await pool.query(
            `SELECT id, username, email, password FROM users WHERE email = $1`,
            [email]
        );

        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Compare supplied password with stored hash
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT using secret from .env
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        return res.json({ token });
    } catch (error: any) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: error.message });
    }
};