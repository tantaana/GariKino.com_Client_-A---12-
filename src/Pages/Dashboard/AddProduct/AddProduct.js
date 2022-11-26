import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryName');
            const data = await res.json();
            return data;
        }
    })


    const handleAddProduct = data => {
        console.log(data.category)
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const addProduct = {
                        category: data.category,
                        name: data.name,
                        email: data.email,
                        photo: imgData.data.url,
                        price: data.price,
                        conditionType: data.conditionType,
                        mobile: data.mobile,
                        productLocation: data.productLocation,
                        description: data.description,
                        purchaseYear: data.purchaseYear


                    }


                    //save product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify()
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product Added Successfully')
                            }
                        })
                }
            })
    }

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-6'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Logged In User 🛻</span>
                    </label>
                    <input type="email" {...register("email")} defaultValue={user?.email} disabled className="input input-bordered input-secondary w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Category:</span>
                    </label>

                    <select {...register("category")} className="select select-primary w-full max-w-xs">
                        <option defaultValue>Honda</option>
                        <option>Toyota</option>
                        <option>BMW</option>
                        {/* {
                            categories.map((category, i) => <option key={category._id} defaultValue>{category.categories}</option>)
                        } */}
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Name 🛻</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Type Product Name" className="input input-bordered input-primary w-full max-w-xs" />
                    {errors.name && <p className='text-red-500 font-bold mt-4 text-center'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Product Image 📸</span>
                    </label>
                    <input type="file" {...register("photo", { required: 'Product image is required' })} placeholder="Upload your image" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
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