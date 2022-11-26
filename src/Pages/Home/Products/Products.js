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
            <h2 className='text-3xl font-bold mt-10'>Showing categories: <span className='text-red-500'>{categories}</span> </h2>

            <div>
                {
                    category.map(product =>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-success">Latest</div>
                                </h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default Products;