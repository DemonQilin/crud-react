import React from 'react';
import '../styles/DeleteWarn.css';
import axios from 'axios';

const DeleteWarn = ({ user, setModal, getUsers }) => {
    const handlerDeleteUser = (e) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
            .then(res => {
                getUsers();
                setModal(false);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="DeleteWarn">
            <h2 className='DeleteWarn--title'>Eliminar Usuario</h2>
            <p className='DeleteWarn--msg'>Por favor, confirme la eliminación del usuario <b>{`${user?.first_name} ${user?.last_name}`}</b> dando click en el botón <b>Aceptar</b>.</p>
            <button className='App--btn DeleteWarn--delete' onClick={handlerDeleteUser}>Aceptar</button>
            <button type="button" className='App--btn FormUser--cancel' onClick={(e) => setModal(false)}><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default DeleteWarn