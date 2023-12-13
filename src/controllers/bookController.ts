import { Request, Response } from 'express';
import Book from '../models/book';

// Controller function to get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ message: 'Error finding book', error });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const { title, author } = req.body;

  try {
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

export const deleteBookById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    res.status(200).json({ message: 'Book deleted successfully', deletedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};
