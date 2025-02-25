import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

router.post('/register', (req, res, next) => {
  registerUser(req, res).catch(next);
});
router.post('/login', (req, res, next) => {
  loginUser(req, res).catch(next);
});

export default router;
