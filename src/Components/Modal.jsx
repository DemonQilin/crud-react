import React from 'react';
import DeleteWarn from './DeleteWarn';
import FormUser from './FormUser';

const Modal = ({modal, setModal, form, getUsers, user, setUser}) => {
    return (
        <div className="Modal">
            {
                (modal === 1 && <FormUser form={form} setModal={setModal} getUsers={getUsers} user={user} setUser={setUser}/>)
                ||
                (modal === 2 && <DeleteWarn user={user} setModal={setModal} getUsers={getUsers} />)
            }
        </div>
    )
}

export default Modal