import express, { Router } from 'express';
import * as bookController from '../controllers/bookController';

const router: Router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBookById);
router.delete('/:id', bookController.deleteBookById);

export default router;
