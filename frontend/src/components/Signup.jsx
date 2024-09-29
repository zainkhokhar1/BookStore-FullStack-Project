
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Toast from 'react-hot-toast'
import { useAuth, useId } from './ContextApi'

function Signup() {
    let [Auth, setAuth] = useAuth();
    let [Id, setId] = useId();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleLogin = () => {
        document.getElementById('my_modal_3').showModal();
    }


    const onSubmit = async (data) => {
        console.log(data)
        try {
            const resSignup = await axios.post('https://bookstore-fullstack-project.onrender.com/user/signup', data);
            console.log(resSignup.data.success);
            if (resSignup.data) {
                Toast.success('Successfully SignUp')
                navigate('/');
                let Token = resSignup.data.AuthToken;
                setAuth(Token);
                console.log(Token)
                console.log(resSignup.data.id)
                let id = resSignup.data.id;
                localStorage.setItem('AuthToken', Token)
                localStorage.setItem('userId',id);
                setId(id);
            }
        }
        catch (e) {
            console.log(e.response.data.error);
            Toast.error('Error ' + e.response.data.error);
        }
    }
    console.log(Id)
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className="modal-box border shadow-lg">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">SignUp</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span> <br />
                            <input type="text" placeholder='Enter your Name fullName' className='py-2 px-3 rounded-md outline-none border w-full ' {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className='mt-6 space-y-2 flex gap-6'>
                            <select className="select select-bordered w-full max-w-xs md:w-56 mt-2" {...register("gender", { required: true })}>
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <div>
                                <input type="number" placeholder="Enter Age" className="input input-bordered w-full max-w-xs" {...register("age", { required: true, min: 8 })} />
                                {errors.age && <span className='text-sm text-red-500'>Age must be greater or equal to 8</span>}
                            </div>
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span> <br />
                            <input type="email" placeholder='Enter your Email' className='py-2 px-3 rounded-md outline-none border w-full ' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" placeholder='Enter your Password' className='py-2 px-3 rounded-md outline-none border w-full ' {...register("password", { required: true, minLength: 5 })} />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>

                            <button className='bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-300 rounded-md'>
                                Signup
                            </button>
                            <p className='text-xl'>
                                Already Registered?{" "} <button onClick={handleLogin} className='text-blue-500 cursor-pointer underline'>
                                    Login </button> {' '}
                            </p>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default Signup
