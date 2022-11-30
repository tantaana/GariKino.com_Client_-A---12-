import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {

    const { createUser, providerLogin, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [navigate, token, from])

    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

                const name = user.displayName;
                const email = user.email;
                const userType = 'Buyer'

                const userInfo = {
                    displayName: name,
                    email: email,
                    photoURL: userType
                }

                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, userType)
                        toast.success('Successfully Signed Up ✔️')
                    })
                    .catch(err => console.log(err.message))



            })
            .catch(err => {
                console.log(err.message)
                if (err.message === 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error('Could not Sign Up. Try Again')
                }
            })

        const saveUser = (name, email, userType) => {
            const user = { name, email, userType };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCreatedUserEmail(email)
                })
        }


    }


    const handleSignUp = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const userType = data.userType;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                const userInfo = {
                    displayName: name,
                    photoURL: userType
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, userType)
                    })
                    .catch(err => console.log(err.message))

                toast.success('User has been created successfully ✔️')
            })
            .catch(err => {
                if (err.message === 'Firebase: Error (auth/email-already-in-use).') {

                    toast.error('Email already in use ❌')
                }
            })

        const saveUser = (name, email, userType) => {
            const user = { name, email, userType };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCreatedUserEmail(email)

                })
        }


    }
    return (
        <div className='flex justify-center items-center mt-10 h-[700px]'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center font-bold mb-10'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Your Name 🔖</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Type Your Name" className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.name && <p className='text-red-500 font-bold mt-4 text-center'>{errors.name?.message}</p>}
                    </div>

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


                    <div className="form-control w-full max-w-xs mt-6">
                        <label className="label">
                            <span className="label-text font-bold">Create account as:</span>
                        </label>

                        <select {...register("userType")} className="select select-primary w-full max-w-xs">
                            <option defaultValue>Normal User</option>
                            <option>Seller</option>
                        </select>
                    </div>

                    <input className='btn btn-primary w-full mt-4 font-bold' type="submit" value="Sign Up" />
                </form>
                <p className='mt-4 font-bold text-center'>Already a member ? Please <Link className='text-primary font-bold' to='/login'>Log In</Link></p>

                <div className="divider font-bold text-xl">OR</div>
                <button onClick={handleGoogle} className='btn btn-primary btn-outline w-full font-bold'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;