import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/userData?email=${user?.email}`

    const { data: email = [] } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data

        }

    })

    return (
        <div className='mt-10 m-4'>
            <h2 className='text-3xl font-bold mb-8'>My Product</h2>

            <div className='mb-8'>
                <h2 className='text-lg'><span className='font-bold'>Your Name:</span> {user?.displayName}</h2>
                <h2 className='text-lg'><span className='font-bold'>Email:</span> {user?.email}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Resale Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            email.map(userEmail =>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{userEmail.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl'>
                                        {userEmail.category}
                                    </td>
                                    <td>{userEmail.resalePrice}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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