import express, { Router } from 'express';
import * as bookController from '../controllers/bookController.ts';

const router: Router = express.Router();

router.get('/', bookController.getAllBooks);

export default router;
