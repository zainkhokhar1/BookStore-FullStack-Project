
import express from 'express';
const router = express.Router();

import { getBook, createBook, SingleBook } from '../controller/bookController.js';

router.get('/', getBook);
router.get('/:id', SingleBook);
router.post('/create/:id', createBook)

export default router;