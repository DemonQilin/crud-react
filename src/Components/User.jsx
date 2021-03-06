import axios from 'axios'
import React from 'react'
import '../styles/User.css'

const User = ({ user, setModal, setUser }) => {

    return (
        <tr>
            <th scope='row'>{user.id}</th>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.birthday}</td>
            <td className='User--actions'>
                <button
                    className='App--btn User--btn__edit'
                    title='Editar usuario'
                    onClick={(e) => {
                        setModal(1);
                        setUser(user);
                    }}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    className='App--btn User--btn__delete' 
                    title='Eliminar usuario'
                    onClick={(e) => {
                        setUser(user);
                        setModal(2);
                    }}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default User