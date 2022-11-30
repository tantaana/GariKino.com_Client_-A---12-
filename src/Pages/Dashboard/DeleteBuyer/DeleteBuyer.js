import React from 'react';

const DeleteModal = ({ deleteBuyer, closeModal, successDelete }) => {
    return (
        <div>




            <input type="checkbox" id="delete-buyer" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Are you sure you want to delete <span className='font-bold text-red-500'>{deleteBuyer.name}</span> ?</h3>
                    <p className="my-10 text-xl">If you delete the user, it can't be undone !</p>
                    <div className="modal-action">
                        <label onClick={() => successDelete(deleteBuyer)} htmlFor="delete-buyer" className="btn btn-error">Delete</label>
                        <button onClick={closeModal} className='btn btn-success'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;