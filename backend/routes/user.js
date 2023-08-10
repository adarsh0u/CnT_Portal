import express from 'express';
import {login,register,updateUser} from '../controllers/user.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.put('/user/editprofile/:id',updateUser);
export default router;