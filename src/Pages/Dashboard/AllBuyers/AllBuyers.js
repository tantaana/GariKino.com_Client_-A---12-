import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import DeleteBuyer from '../DeleteBuyer/DeleteBuyer';

const AllBuyers = () => {

    const { user } = useContext(AuthContext);

    const [deleteBuyer, setDeleteBuyer] = useState(null);

    const closeModal = () => {
        setDeleteBuyer(null)
    }


    const url = 'http://localhost:5000/userInfo?userType=Buyer'

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['Buyer'],
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


    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Buyer Deleted Successfully')
                }
            })
    }

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-8'>All Buyers</h2>

            <div className='mb-8'>
                <h2 className='text-lg'><span className='font-bold'>Your Name:</span> {user?.displayName} <span className='font-bold'>(Admin)</span></h2>
                <h2 className='text-lg'><span className='font-bold'>Email:</span> {user?.email}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) =>
                                <tr>
                                    <td className='font-bold text-xl'>{i + 1}</td>
                                    <td>
                                        <div>
                                            <h2 className="font-bold">{buyer.name}</h2>
                                        </div>
                                    </td>
                                    <td>
                                        {buyer.email}
                                    </td>
                                    <td className='font-bold text-xl'>{buyer._id}</td>
                                    <th className='flex gap-2'>
                                        <button className="btn btn-success text-sm font-bold">Verify User</button>
                                        <label
                                            onClick={() => setDeleteBuyer(buyer)} htmlFor="delete-buyer" className="btn btn-error text-sm font-bold">Delete User</label>
                                    </th>
                                </tr>)
                        }
                    </tbody>


                </table>
            </div>

            {deleteBuyer && <DeleteBuyer
                closeModal={closeModal}
                deleteBuyer={deleteBuyer}
                successDelete={handleDeleteBuyer}
            ></DeleteBuyer>}
        </div>
    );
};

export default AllBuyers;