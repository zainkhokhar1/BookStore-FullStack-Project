
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                <Link to='/'>✕</Link>
                            </button>

                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span> <br />
                                <input type="email" placeholder='Enter your Email' className='py-2 px-3 rounded-md outline-none border w-80 ' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span> <br />
                                <input type="password" placeholder='Enter your Password' className='py-2 px-3 rounded-md outline-none border w-80 ' {...register("password", { required: true })} />
                               <br /> 
                               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-300 rounded-md'>
                                    Login
                                </button>
                                <p>
                                    Not Registered{" "} <Link to='/signup' className='text-blue-500 cursor-pointer underline'>
                                        SignUp </Link> {' '}
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login