import { checkSchema } from 'express-validator';

const checkBookSchema = checkSchema(
  {
    title: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      errorMessage: 'Title must be a non-empty string',
      isLength: {
        options: { min: 3 },
        errorMessage: 'Title must be at least 3 characters long'
      }
    },
    author: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      errorMessage: 'Author must be a non-empty string'
    }
  },
  ['body']
);

export default checkBookSchema;
