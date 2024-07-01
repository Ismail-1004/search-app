import { Router } from 'express';
import validateSearch  from "../middleware/validationMiddleware"
import usersController from '../controllers/usersController';

const router = Router()

router.post('/search', validateSearch , usersController.search)

export default router