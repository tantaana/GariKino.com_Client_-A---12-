import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import DeleteSeller from '../DeleteSeller/DeleteSeller';

const AllSellers = () => {

    const { user } = useContext(AuthContext);

    const [deleteSeller, setDeleteSeller] = useState(null);

    const closeModal = () => {
        setDeleteSeller(null)
    }

    const url = 'https://used-products-server-phi.vercel.app/userInfo?userType=Seller'

    const { data: sellers = [], refetch } = useQuery({
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

    const handleDeleteSeller = seller => {
        fetch(`https://used-products-server-phi.vercel.app/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Seller Deleted Successfully')
                }
            })
    }


    const handleVerify = (email) => {
        fetch(`https://used-products-server-phi.vercel.app/users/info?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

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
                                    <td className='font-bold text-xl'>{seller._id}</td>
                                    <th className='flex gap-2'>
                                        <button onClick={() => handleVerify(seller.email)} className="btn btn-success text-sm font-bold">Verify User</button>
                                        <label
                                            onClick={() => setDeleteSeller(seller)} htmlFor="delete-seller" className="btn btn-error text-sm font-bold">Delete User</label>
                                    </th>
                                </tr>)
                        }
                    </tbody>


                </table>
            </div>

            {deleteSeller && <DeleteSeller
                closeModal={closeModal}
                deleteSeller={deleteSeller}
                successDelete={handleDeleteSeller}
            ></DeleteSeller>}
        </div>
    );
};

export default AllSellers;