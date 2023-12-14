import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import allowedFieldsBook from '../config/book';

const validateIfBookHasError = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

const handleBookHasUnexpectedFields = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const receivedFields = Object.keys(req.body);

  const unexpectedFields = receivedFields.filter(
    (field) => !allowedFieldsBook.includes(field),
  );
  if (unexpectedFields.length > 0) {
    return res.status(400).json({ error: 'Something went wrong...' });
  }

  return next();
};

export { handleBookHasUnexpectedFields, validateIfBookHasError };
