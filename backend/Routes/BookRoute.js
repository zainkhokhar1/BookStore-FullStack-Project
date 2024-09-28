
import express from 'express';
const router = express.Router();

import { getBook } from '../controller/bookController.js';

router.get('/', getBook)




export default router;