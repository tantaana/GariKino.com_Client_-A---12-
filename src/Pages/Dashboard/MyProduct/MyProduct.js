import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const url = `https://used-products-server-phi.vercel.app/userData?email=${user?.email}`

    const { data: email, isLoading } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();
            console.log(data)
            return data

        }


    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-8'>My Products</h2>

            <div className='mb-8'>
                <h2 className='text-lg'><span className='font-bold'>Your Name:</span> {user?.displayName}</h2>
                <h2 className='text-lg'><span className='font-bold'>Email:</span> {user?.email}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Resale Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            email.map((userEmail, i) =>
                                <tr>
                                    <td className='font-bold text-xl'>{i + 1}</td>
                                    <td className='w-10 h-20'>
                                        <img src={userEmail.photo} alt="" />
                                    </td>
                                    <td>
                                        <div>
                                            <h2 className="font-bold">{userEmail.name}</h2>
                                        </div>
                                    </td>
                                    <td className='text-xl'>
                                        <u>{userEmail.category}</u>
                                    </td>
                                    <td className='font-bold text-xl'>${userEmail.resalePrice}</td>
                                    <th>
                                        <button className="btn btn-error">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProduct;