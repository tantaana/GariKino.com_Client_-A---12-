import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                toast.success('Successfully logged in ✔️')
            })
            .catch(err => {
                console.log(err.message)
                if (err.message === 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error('Could not Login. Try Again')
                }
            })
    }

    const handleLogin = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                toast.success('Successfully Logged In✔️')
            })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/wrong-password).") {
                    toast.error('Wrong Password')
                }
                if (err.message === "Firebase: Error (auth/user-not-found).") {
                    toast.error('User Not Found')
                }
            })
    }
    return (
        <div className='flex justify-center items-center mt-10 h-[700px]'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center font-bold mb-10'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Your Email 📧</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Type Your Email" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-red-500 font-bold mt-4 text-center'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Your Password 🔐</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or longer" }
                            })} placeholder="Type Your Password" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-red-500 font-bold mt-4 text-center'>{errors.password?.message}</p>}
                    </div>
                    <div>

                    </div>
                    <label className="label">
                        <Link><span className="label-text font-bold text-blue-400 hover:text-blue-500 text-lg">Forgot your password?</span></Link>
                    </label>
                    <input className='btn btn-primary w-full mt-4 font-bold' type="submit" value="Login" />
                </form>
                <p className='mt-4 font-bold text-center'>New to <i>GariKino.com</i> ? Please <Link className='text-primary font-bold' to='/signup'>Sign Up</Link></p>

                <div className="divider font-bold text-xl">OR</div>
                <button onClick={handleGoogle} className='btn btn-primary btn-outline w-full font-bold'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;