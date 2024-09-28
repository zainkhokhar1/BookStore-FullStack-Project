
import Book from "../models/bookModel.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find({});
        console.log(book)
        res.status(200).json(book);
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error : 'Internal Server Error' });
    }
}