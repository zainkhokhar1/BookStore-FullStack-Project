
import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Free", "Entertainment", "Motivative", "Study", "Gaming", "Religious"]
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId, ref: 'User',
    }
})

const Book = mongoose.model('Book', bookSchema);

export default Book;