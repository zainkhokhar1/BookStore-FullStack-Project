
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Toast from 'react-hot-toast'
import { useAuth, useId } from './ContextApi'

function Login() {
    const [Authorize, setAuthorize] = useAuth();
    const [Id, setId] = useId();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            let userFinded = await axios.post('https://bookstore-fullstack-project.onrender.com/user/login', data);
            if (userFinded.data) {
                let AuthToken = userFinded.data.AuthToken;
                setAuthorize(AuthToken);
                console.log(userFinded.data.id)
                localStorage.setItem('AuthToken', AuthToken);
                let id = userFinded.data.id;
                localStorage.setItem('userId',id)
                setId(id)
                Toast.success(userFinded.data.success, {
                    duration: 3000,
                    position: 'top-center',
                })
            }
        } catch (e) {
            console.log('This is Catch ' + e.response.data.error);
            Toast.error(e.response.data.error)

        }
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
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
                        <p className='py-4'>
                            Press Escape to close
                        </p>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
