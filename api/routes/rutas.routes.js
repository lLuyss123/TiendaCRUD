import { Router } from 'express';
import { createProduct } from '../controller/pruduct.controller.js';
const router = Router();
router.post('/users', createProduct);

export default router