import React from 'react'
import User from './User'
import '../styles/UsersList.css'

const UsersList = ({ users, setModal, setUser}) => {
    return (
        <table className="UsersList" summary='Lista de usuarios de la plataforma estudiantil'>
            <thead className='UsersList--thead'>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellido</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>Fecha de Nacimiento</th>
                    <th scope='col'>Acciones</th>
                </tr>
            </thead>
            <tbody className='UsersList--tbody'>
                {users?.map(user => <User user={user} key={user.id} setModal={setModal} setUser={setUser}/>)}
            </tbody>
        </table>
    )
}

export default UsersList