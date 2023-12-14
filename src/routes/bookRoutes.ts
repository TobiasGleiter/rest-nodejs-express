import express, { Router } from 'express';
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from '../controllers/bookController';
import {
  handleBookHasUnexpectedFields,
  validateIfBookHasError,
} from '../middlewares/validationBook';
import checkBookSchema from '../validation/validationBook';

const router: Router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post(
  '/',
  handleBookHasUnexpectedFields,
  checkBookSchema,
  validateIfBookHasError,
  createBook,
);
router.put(
  '/:id',
  handleBookHasUnexpectedFields,
  checkBookSchema,
  validateIfBookHasError,
  updateBookById,
);
router.delete('/:id', deleteBookById);

export default router;
