import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const { categories } = useLoaderData();
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold mt-10'>Showing categories: <span className='text-red-500'>{categories}</span> </h2>
        </div>
    );
};

export default Products;