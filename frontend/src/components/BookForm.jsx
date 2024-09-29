
import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

function BookForm() {
    const navigate = useNavigate();
    const RouteParams = useParams();
    let Id = RouteParams.id;
    console.log(Id)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            console.log(data);
            let result = await axios.post(`https://bookstore-fullstack-project.onrender.com/book/create/${Id}`, data);
            console.log(result.data)
            if (result.data) {
                Toast.success(result.data.success);
                navigate('/');
            }
        }
        catch (e) {
            console.log(e.message);
            Toast.error('Failed to Create Book');
        }
    }
    return (
        <>
            <NavBar />
            <div className=' min-h-screen mt-28 md:mx-20 md:flex items-center'>
                <div className="left min-w-1/4">
                    <img className='ml-20 w-72 md:w-80 md:max-w-96' src="https://img.freepik.com/premium-photo/person-creating-visual-guidelines-specifications-ui-elements-interactions_1314467-49068.jpg?w=740" alt="FormImage" />
                </div>
                <div className="right md:w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className='m-6 border border-pink-400 flex flex-col items-center justify-center  md:grid md:grid-cols-3 space-y-6 md:pl-44 shadow-2xl shadow-pink-200 rounded-md py-6'>
                        <h1 className='text-2xl font-semibold text-pink-500 col-span-2'>
                            Fill the form to Post Book
                        </h1>
                        <input
                            type="text"
                            placeholder="Enter Book Name"
                            className="input input-bordered input-secondary md:w-full max-w-xs md:col-span-2" {...register("name", { required: true })} />
                        <input
                            type="text"
                            placeholder="Enter Book Title"
                            className="input input-bordered input-secondary md:w-full max-w-xs md:col-span-2"
                            {...register("title", { required: true })} />

                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="input input-bordered input-secondary md:w-1/3 max-w-xs md:col-span-2"
                            {...register("price", { required: true, min: 0 })} />
                        <select className="select select-secondary w-60 md:w-40  max-w-xs  md:-ml-60"{...register("category", { required: true })}>
                            <option disabled selected>Category</option>
                            <option>Free</option>
                            <option>Entertainment</option>
                            <option>Motivative</option>
                            <option>Study</option>
                            <option>Gaming</option>
                            <option>Religious</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            className="input input-bordered input-secondary md:w-full md:max-w-xs md:col-span-2"
                            {...register("image", { required: true })} />
                        <br /> <button className='bg-pink-500 hover:bg-pink-600 duration-200 rounded-md text-lg py-2 px-1 text-white w-28'>
                            Create
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookForm
