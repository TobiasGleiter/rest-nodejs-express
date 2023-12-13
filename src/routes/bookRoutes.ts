import express, { Router } from 'express';
import * as bookController from '../controllers/bookController';

const router: Router = express.Router();

router.get('/', bookController.getAllBooks);
// router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
// router.post('/:id', bookController.updateBookById);
// router.post('/:id', bookController.deleteBookById);

export default router;
