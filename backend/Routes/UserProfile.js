
import express from 'express'
const router = express.Router();
import User from '../models/UserModel.js'
import {showUser} from '../controller/userController.js'
router.get('/:id', showUser)



export default router;