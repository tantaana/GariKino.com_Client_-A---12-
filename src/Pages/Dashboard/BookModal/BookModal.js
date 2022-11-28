import React from 'react';

const BookModal = ({ modalVal }) => {
    console.log(modalVal)
    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <><h3 className="text-lg font-bold">{modalVal.name}</h3>
                        <p className="py-4">{modalVal.originalPrice}</p></>

                </div>
            </div>
        </>

    );
};

export default BookModal;