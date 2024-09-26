
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='text-center text-xl font-bold pt-32'>
                <h1 className='tracking-wider'>
                    Thanks for <span className='text-purple-700'> Contacting Us. </span> <br />You will Reply your message within 24 Hours <br />
                    <span className='text-purple-800 text-2xl'>
                        Have A Nice Day:)
                    </span>
                </h1>
            </div>
            <div className=' md:m-20 flex flex-col md:flex-row md:flex-1 items-center justify-center gap-20 my-8'>
                <div className="left mt-4">
                    <img className='md:max-w-[37rem]  md:mb-26 rounded-md' src="https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept-illustration_335657-2070.jpg?t=st=1727356283~exp=1727359883~hmac=80cc1b186fa9216047ac56e309f54d53ae82d50f24bfdbc37991835b6f578bc4&w=740" />
                </div>
                <div className="right bg-purple-50 border  border-purple-400 p-12 rounded-lg shadow-2xl dark:shadow-lg dark:shadow-purple-900 shadow-purple-200">
                    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <label className="input file-input  flex items-center gap-2 input-primary">
                            Name
                            <input type="text" className="grow outline-none" placeholder="Enter Name"  {...register("name", { required: true })} />
                        </label>
                        {errors.name && <span className='text-red-500'>This field is required</span>}
                        <label className="input input-bordered flex items-center gap-2 input-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" className="grow" placeholder="Email"  {...register("email", { required: true })} />
                        </label>
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                        <br />
                        <textarea className="textarea textarea-primary" placeholder="Enter Message"  {...register("message", { required: true })} ></textarea>
                        <br /> {errors.message && <span className='text-red-500'>This field is required</span>}
                        <br />
                        <button className='px-3 py-2 bg-purple-600 border rounded-md text-white hover:bg-purple-700 duration-200'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm