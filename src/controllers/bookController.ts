import { Request, Response } from 'express';

// Example book data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

// Controller function to get all books
export const getAllBooks = (res: Response): void => {
  try {
    // Simulate fetching data from a database
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books' });
  }
};

export const getBookById = () => {};

export const createBook = (req: Request): void => {
  console.log(req);
};

export const updateBookById = () => {};

export const deleteBookById = () => {};
