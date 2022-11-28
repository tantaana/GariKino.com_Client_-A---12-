import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSellers = () => {

    const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/userInfo?userType=Seller'

    const { data: sellers = [] } = useQuery({
        queryKey: ['Sellers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            }
            );
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-8'>All Sellers</h2>

            <div className='mb-8'>
                <h2 className='text-lg'><span className='font-bold'>Your Name:</span> {user?.displayName} <span className='font-bold'>(Admin)</span></h2>
                <h2 className='text-lg'><span className='font-bold'>Email:</span> {user?.email}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) =>
                                <tr>
                                    <td className='font-bold text-xl'>{i + 1}</td>
                                    <td>
                                        <div>
                                            <h2 className="font-bold">{seller.name}</h2>
                                        </div>
                                    </td>
                                    <td>
                                        {seller.email}
                                    </td>
                                    <td className='font-bold text-xl'>${seller._id}</td>
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

export default AllSellers;