import mongoose from '../config/mongo';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
