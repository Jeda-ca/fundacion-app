import { Router } from 'express';
import authController from '../controllers/authController';
import { validateLogin } from '../validators/authValidator';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/login', validateLogin, authController.login);
router.get('/me', authMiddleware, authController.me);
router.post('/logout', authController.logout);

export default router;
