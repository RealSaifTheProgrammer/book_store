import Book from "../models/bookModel.js";

export const getBook = async (req, res) => {
  const book = await Book.findOne(); // أول كتاب
  res.json(book);
};
