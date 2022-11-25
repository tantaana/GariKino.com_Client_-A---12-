import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');


    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-6'>Add A Product</h2>
            <form onSubmit={handleSubmit()}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Name 🔖</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Type Product Name" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.name && <p className='text-red-500 font-bold mt-4 text-center'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Price 🔖</span>
                    </label>
                    <input type="number" {...register("price", { required: 'Price must be included' })} placeholder="How much for this product?" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.price && <p className='text-red-500 font-bold mt-4 text-center'>{errors.price?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mt-6">
                    <label className="label">
                        <span className="label-text font-bold">Condition Type:</span>
                    </label>

                    <select {...register("conditionType")} className="select select-primary w-full max-w-xs">
                        <option defaultValue>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Mobile Number 🔖</span>
                    </label>
                    <input type="number" {...register("mobile", { required: 'Mobile number must be included' })} placeholder="How much for this product?" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.mobile && <p className='text-red-500 font-bold mt-4 text-center'>{errors.mobile?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mt-6">
                    <label className="label">
                        <span className="label-text font-bold">Product Location:</span>
                    </label>

                    <select {...register("productLocation")} className="select select-primary w-full max-w-xs">
                        <option defaultValue>Dhaka</option>
                        <option>Chittgong</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Barishal</option>
                        <option>Sylhet</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Description 🔖</span>
                    </label>
                    <input type="text" {...register("description", { required: 'You have to write something about your product' })} placeholder="Type Product Description" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.description && <p className='text-red-500 font-bold mt-4 text-center'>{errors.description?.message}</p>}
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

                    <select {...register("userAs")} className="select select-primary w-full max-w-xs">
                        <option defaultValue>Normal User</option>
                        <option>Seller</option>
                    </select>
                </div>

                <input className='btn btn-primary w-full mt-4 font-bold' type="submit" value="Sign Up" />
            </form>

        </div>
    );
};

export default AddProduct;