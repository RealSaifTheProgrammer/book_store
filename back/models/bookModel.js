import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  price: Number,
  descriptionToAnimate: {
    first: String,
    second: String,
    third: String,
  },
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
