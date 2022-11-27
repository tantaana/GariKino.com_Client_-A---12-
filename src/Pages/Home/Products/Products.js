import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const { categories } = useLoaderData();

    const url = `http://localhost:5000/products?category=${categories}`

    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h2 className='text-3xl font-bold my-10'>Showing categories: <span className='text-red-500'>{categories}</span> </h2>

            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {
                        category.map(product =>

                            <div className="card w-96 bg-red-300 shadow-xl">
                                <figure><img src={product.photo} className="h-[400px] w-full" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div>
                                        <h2 className="card-title font-bold text-2xl mb-8 break-words">
                                            {product.name}
                                            <div className="badge badge-success">Latest</div>
                                        </h2>
                                    </div>
                                    <p className='text-lg mb-6 break-words'><span className='font-bold'>Description:</span> ❝{product.description}❞</p>
                                    <p className='text-lg'><span className='font-bold'>Used:</span> {product.purchaseYear} year(s)</p>
                                    <p className='text-lg'><span className='font-bold'>Condition:</span> {product.condition}</p>
                                    <p className='text-lg mb-6'><span className='font-bold'>Location:</span> {product.productLocation}</p>
                                    <p className='text-2xl font-bold flex items-center gap-2'><span className='font-bold badge badge-primary p-4'>Original Price:</span> ${product.originalPrice}</p>
                                    <p className='text-2xl font-bold flex items-center gap-2 mb-8'><span className='font-bold badge badge-success p-4'>Resale Price:</span> ${product.resalePrice}</p>

                                    <div className="card-actions bg-blue-200 p-2 rounded">
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='w-1/4' />
                                                <div>
                                                    <h2 className='font-bold text-xl'>{product.userName}</h2>
                                                    <h2>Seller</h2>
                                                </div>
                                            </div>
                                            <button className='btn btn-primary'>Book Now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;