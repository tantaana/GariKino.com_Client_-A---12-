import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ modalData }) => {
    const { user } = useContext(AuthContext);

    const { name } = modalData;
    console.log(user.displayName, user.email, name)

    const handleBook = event => {
        event.preventDefault();
        console.log()

    }

    // const [data, setData] = useState('');


    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBook} className='bg-blue-300 p-4 rounded'>
                        <h2>Your Name</h2>
                        <input type="text" value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs" />
                        <h2>Your Email</h2>
                        <input type="email" value={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
                        <h2>Selected Item</h2>
                        <input type="text" value={name} className="input input-bordered input-primary w-full max-w-xs" />
                        <h2>Price</h2>
                        <input type="number" value={modalData.resalePrice} className="input input-bordered input-primary w-full max-w-xs" />
                        <h2>Your Number</h2>
                        <input type="number" placeholder="Type your mobile number" className="input input-bordered input-primary w-full max-w-xs" />
                        <h2>Meeting Location</h2>
                        <input type="text" placeholder="Type your meeting location" className="input input-bordered input-primary w-full max-w-xs" />
                        <br />
                        <input type="submit" className='btn btn-primary' value="Submit" />

                    </form>

                </div>
            </div>
        </>

    );
};

export default BookModal;