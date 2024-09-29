
import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({ singleBook }) {
    let Navigate = useNavigate();
    const handleSingleBook = () => {
        Navigate(`/book/${singleBook._id}`)
    }
    return (
        <>
            <div className='mt-12 mb-8' onClick={handleSingleBook}>
                <div className=" card bg-base-100 w-92 mx-2 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img className='w-lvw object-cover h-72'
                            src={singleBook.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {singleBook.name}
                            <div className="badge badge-secondary">{singleBook.category}</div>
                        </h2>
                        <p>{singleBook.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${singleBook.price}</div>
                            <div className="border-[2px] cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white duration-200">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards