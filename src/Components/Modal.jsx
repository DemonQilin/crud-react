import React from 'react';
import FormUser from './FormUser';

const Modal = ({modal, setModal, form, getUsers}) => {
    return (
        <div className="Modal">
            {
                (modal === 1 && <FormUser form={form} setModal={setModal} getUsers={ getUsers}/>)
                ||
                (modal === 2 && 'Hola mundo')
            }
        </div>
    )
}

export default Modal