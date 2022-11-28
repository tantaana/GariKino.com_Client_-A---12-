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

                    <form onSubmit={handleBook} className='bg-blue-300 p-6 rounded '>
                        <h2 className='mb-2 font-bold'>Your Name 📝</h2>
                        <input type="text" value={user?.displayName} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Your Email 📧</h2>
                        <input type="email" value={user?.email} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Selected Item 🛻</h2>
                        <input type="text" value={name} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Price 💲</h2>
                        <input type="number" value={modalData.resalePrice} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Your Number 📞</h2>
                        <input type="number" placeholder="Type your mobile number" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Meeting Location 🚻</h2>
                        <input type="text" placeholder="Type your meeting location" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <br />
                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-primary font-bold' value="Submit" />
                        </div>

                    </form>

                </div>
            </div>
        </>

    );
};

export default BookModal;