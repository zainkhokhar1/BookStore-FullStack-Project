import express from 'express'
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 4000
import bookRoute from './Routes/BookRoute.js'
import cors from 'cors'
import UserRoute from './Routes/UserRoute.js'
///////////////// Connecting to MongoDB ////////////////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoURL = process.env.MONGODBURL;
(async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Successfully Connected to MONGO');
        })
    } catch (e) {
        console.log(e.message)
    }
})();

////////////////////-----------------////////////////////

app.use(cors());

//-------------Defining routes ------------//////////////

app.use('/book', bookRoute);

app.use('/user', UserRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})