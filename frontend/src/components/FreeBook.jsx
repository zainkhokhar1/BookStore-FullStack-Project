
import React, { forwardRef, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
function FreeBook() {
    let freeBooks;
    const [freeBook, setFreeBook] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            let books = await axios.get('http://localhost:4001/book');
            console.log(books.data)
            let freeBooks = books.data.filter((singleData) => {
                return singleData.category === 'Free';
            })
            setFreeBook(freeBooks);
        }
        fetchBooks();
    }, [])
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-8'>
                <div className='py-8'>
                    <h1 className='font-semibold text-xl pb-2'>
                        Free Offered Courses
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam iure voluptates molestias placeat illum doloribus aut nobis sit officia? Porro perspiciatis ullam magni aut illum. Alias neque voluptates vitae.
                    </p>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {
                            freeBook.map((singleBook) => {
                                return <Cards singleBook={singleBook} key={singleBook._id} />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook
