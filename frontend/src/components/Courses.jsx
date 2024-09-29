import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
function courses() {
    let [book, setBook] = useState([]);

    useEffect(() => {

        const getBook = async () => {
            try {
                const res = await axios.get('https://bookstore-fullstack-project.onrender.com/book');
                setBook(res.data);
            } catch (e) {
                console.log(e.message)
            }
        }
        getBook();
    }, [])
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're delighted to have you <span className='text-pink-500'>Here:)</span>
                    </h1>
                    <p className='mt-12'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, hic asperiores. Quibusdam unde nobis modi incidunt, repellat asperiores fugiat! Iste nostrum laborum, explicabo libero quas deserunt voluptate hic est recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos nostrum, perferendis commodi quas sequi nesciunt tempore itaque quis natus quaerat excepturi vitae ducimus repellendus architecto sint quae dolorum sunt!
                    </p>
                    <button className='bg-pink-500 text-white px-2 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>
                        <Link to='/'>Back</Link>
                    </button>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((singleBook) => {
                            return (
                                <Cards singleBook={singleBook} key={singleBook.id} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default courses
