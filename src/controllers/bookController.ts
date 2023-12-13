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

export const getBookById = async () => {};

export const createBook = async (req: Request, res: Response) => {
  const { title, author } = req.body;

  try {
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

export const updateBookById = (): void => {};

export const deleteBookById = (): void => {};
