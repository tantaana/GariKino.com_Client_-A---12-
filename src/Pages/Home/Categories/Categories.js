import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-28'>
            <h2 className='text-4xl md:text-5xl text-center font-bold mb-20'>Categories</h2>


            <div className='flex justify-center '>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {
                        categories.map(category =>
                            <Link to={`/category/${category._id}`}>
                                <div className="card w-96 shadow-xl image-full h-[300px] hover:border">
                                    <figure><img src={category.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-4xl font-bold text-white">{category.categories}</h2>
                                        <p className='text-center text-xl font-bold mt-20'>{category.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;