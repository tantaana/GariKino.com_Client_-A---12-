import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ modalData }) => {
    const { user } = useContext(AuthContext);

    const { name } = modalData;


    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const item = form.item.value;
        const price = form.price.value;
        const meeting = form.meeting.value;

        const modalvalue = {
            name, email, item, price, number, meeting
        }

        console.log(modalvalue)

        toast.success('The item is booked')
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
                        <input type="text" name="name" value={user?.displayName} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Your Email 📧</h2>
                        <input type="email" name="email" value={user?.email} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Selected Item 🛻</h2>
                        <input type="text" name='item' value={name} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Price 💲</h2>
                        <input type="number" name='price' value={modalData.resalePrice} disabled className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <h2 className='mb-2 font-bold'>Your Number 📞</h2>
                        <input type="number" name="number" placeholder="Type your mobile number" className="input input-bordered input-primary w-full max-w-xs mb-4" required />
                        <h2 className='mb-2 font-bold'>Meeting Location 🚻</h2>
                        <input type="text" name="meeting" placeholder="Type your meeting location" className="input input-bordered input-primary w-full max-w-xs mb-4" required />
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