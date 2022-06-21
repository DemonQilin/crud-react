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
                <button className='App--btn User--btn__edit' title='Editar usuario'>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='App--btn User--btn__delete' title='Eliminar usuario'>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default User