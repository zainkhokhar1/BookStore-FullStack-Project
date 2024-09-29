
import Book from "../models/bookModel.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find({});
        console.log(book)
        res.status(200).json(book);
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const SingleBook = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        let bookFinded = await Book.findOne({ _id : id }).populate('creator');
        console.log(bookFinded)
        if (bookFinded) {
            res.status(200).json({ success: 'Book Founded', bookFinded })
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(401).json({ error: 'Book Not Founded' })
    }
}

export const createBook = async (req, res) => {
    try {
        let { name, title, price, category, image } = req.body;
        console.log(req.body)
        console.log(req.params)
        let { id } = req.params;
        console.log(id)
        let resBook = await new Book({
            name,
            title,
            price,
            category,
            image,
            creator: id
        });
        await resBook.save();
        if (resBook) {
            return res.status(200).json({ success: 'Book Successfully Created' });
        }
        else {
            return res.status(401).json({ error: 'Failed to Create Book' })
        }
    } catch (e) {
        res.status(401).json({ error: 'Failed to Create Book' })
        console.log(e)
    }
}