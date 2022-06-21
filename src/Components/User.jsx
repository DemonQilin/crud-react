import React from 'react'
import '../styles/User.css'

const User = ({user}) => {
    return (
        <tr>
            <th scope='row'>{user.id}</th>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.birthday}</td>
            <td className='User--actions'>
                <button className='User--btn User--btn__edit'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    Editar
                </button>
                <button className='User--btn User--btn__delete'>
                    <i class="fa-solid fa-trash"></i>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default User