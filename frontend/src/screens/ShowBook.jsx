
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ShowBook() {
    const [singleBook, setSingleBook] = useState([]);
    const routeParams = useParams();
    let id = routeParams.id;
    const getBook = async () => {
        try {
            let Book = await axios.get(`https://bookstore-fullstack-project.onrender.com/book/${id}`);
            setSingleBook(Book.data.bookFinded);
            console.log(singleBook.data.bookFinded)
            if (Book.data) {
                console.log('data')
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        console.log('Running');
        getBook();

    }, [])
    console.log(singleBook)
    return (
        <>
            <NavBar />
            <div className='absolute inset-0 blur-sm  mt-20 md:w-auto'>
                <img className='w-auto  md:w-full h-[55rem]  md:h-[45rem]' src="https://img.freepik.com/premium-photo/black-background-with-yellow-orange-circle-black-background_1207067-16243.jpg?w=826 " alt="BookImage" />
            </div>
            <div className='mx-8 w-92 flex flex-col md:flex md:flex-row mt-28 md:mx-56  rounded-md shadow-md shadow-pink-300 mb-28 bg-purple-100 border-2 relative '>
                <div className="left p-12">
                    <img className='md:w-full max-h-80 ml-8 rounded-lg md:max-h-96' src={singleBook.image} alt="Book image" />
                    <div className='p-6 text-center'> Created By
                        {
                            singleBook.creator ? <span className='text-xl underline text-purple-600 pl-2'> {singleBook.creator.name}</span> : <span className='text-xl underline text-purple-600 pl-2'>Admin</span>
                        }


                    </div>
                </div>

                <div className="right mb-6 flex flex-col text-center space-y-6 md:space-y-8 md:pt-12 md:px-16">
                    <h1 className='text-4xl text-purple-700 font-bold cursor-pointer underline  decoration-purple-500'>
                        Book Details
                    </h1>
                    <div className='text-2xl pt-8'> Name : <span className='text-pink-500 font-semibold md:pl-2 text-3xl underline cursor-pointer'>{singleBook.name}</span> </div>
                    <div className='text-2xl flex ml-12'> Category  <span className='text-pink-500 font-semibold text-2xl ml-2 md:ml-4 underline cursor-pointer'>{singleBook.category}</span> </div>
                    <div className='text-2xl -ml-6'> Title : <span className='text-pink-500 font-semibold text-2xl underline cursor-pointer'>{singleBook.title}</span> </div>
                    <div className='text-2xl'> Price <button className='hover:bg-purple-500 py-2 px-4 rounded-md duration-200 cursor-pointer bg-purple-400 ml-6'>{singleBook.price}$</button> </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ShowBook
