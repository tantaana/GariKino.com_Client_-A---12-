import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');


    const handleAddProduct = data => {
        console.log(data)
    }

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-6'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Name 🛻</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Type Product Name" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.name && <p className='text-red-500 font-bold mt-4 text-center'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL 📸</span>
                    </label>
                    <input type="text" {...register("photo", { required: 'Photo URL is required' })} placeholder="Type Your Photo Link" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.photo && <p className='text-red-500 font-bold mt-4 text-center'>{errors.photo?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Price 💲</span>
                    </label>
                    <input type="number" {...register("price", { required: 'Price must be included' })} placeholder="How much for this product?" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.price && <p className='text-red-500 font-bold mt-4 text-center'>{errors.price?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
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
                        <span className="label-text font-bold">Mobile Number ☎️</span>
                    </label>
                    <input type="number" {...register("mobile", { required: 'Mobile number must be included' })} placeholder="Type your mobile number" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.mobile && <p className='text-red-500 font-bold mt-4 text-center'>{errors.mobile?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Location:</span>
                    </label>

                    <select {...register("productLocation")} className="select select-primary w-full max-w-xs">
                        <option defaultValue>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Barishal</option>
                        <option>Sylhet</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs mt-8">
                    <label className="label">
                        <span className="label-text font-bold">Description 📝</span>
                    </label>
                    <textarea {...register("description", { required: 'You have to write something about your product' })} className="textarea textarea-primary" placeholder="Write something about your product"></textarea>
                    {/* <input type="text" {...register("description", { required: 'You have to write something about your product' })} placeholder="Type Product Description" className="input input-bordered input-primary w-full max-w-xs" /> */}
                    {errors.description && <p className='text-red-500 font-bold mt-4 text-center'>{errors.description?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Year of Purchase 🗓️</span>
                    </label>
                    <input type="number" {...register("purchaseYear", { required: 'Year of purchase cannot be empty' })} placeholder="Write your purchase date" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.purchaseYear && <p className='text-red-500 font-bold mt-4 text-center'>{errors.purchaseYear?.message}</p>}
                </div>


                <input className='btn btn-primary w-1/2 mt-4 font-bold' type="submit" value="Add Your Product" />
            </form>

        </div>
    );
};

export default AddProduct;