import React, { useEffect } from 'react';
import '../styles/FormUser.css';
import axios from 'axios';

const FormUser = ({ form, setModal, getUsers, user, setUser}) => {
    const { register, handleSubmit, reset } = form;

    const resetForm = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        });
        getUsers();
        setModal(false);
    };

    const submit = data => {
        data.birthday = data.birthday.toJSON().split('T')[0];

        if (user) {
            axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, data)
                .then(res => {
                    setUser(null);
                    resetForm();
                })
                .catch(error => console.warn(error));
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(res => {
                    resetForm();
                })
                .catch(error => console.warn(error));
        }
    }

    useEffect(() => {
        if (user) {
            reset(user);
        }
    }, [user]);

    return (
        <form className="FormUser" onSubmit={handleSubmit(submit)} autoComplete="off">
            <h2 className='FormUser--title'>Agregar Usuario</h2>
            <div className="FormUser--inputs">
                <label htmlFor="first_name" className="FormUser--label">Nombre</label>
                <input type="text" name="first_name" id="first_name" className="FormUser--input" {...register('first_name', {
                    required: true,
                    maxLength: 25,
                    pattern: /^[a-zA-ZÁáÉéÍíÓóÚú]+$/
                })} />
                <span className='FormUser--warn'>* Debe contener esclusivamente caracteres alfabéticos.</span>
                <label htmlFor="last_name" className="FormUser--label">Apellido</label>
                <input type="text" name="last_name" id="last_name" className="FormUser--input" {...register('last_name', {
                    required: true,
                    maxLength: 25,
                    pattern: /^[a-zA-ZÁáÉéÍíÓóÚú]+$/
                })} />
                <span className='FormUser--warn'>* Debe contener esclusivamente caracteres alfabéticos.</span>
                <label htmlFor="email" className="FormUser--label">Correo</label>
                <input type="email" name="email" id="email" className="FormUser--input" {...register('email', {
                    required: true,
                    maxLength: 150,
                    pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
                })} />
                <span className='FormUser--warn'>* Excluyendo (@.) solo debe contener caracteres alfanúmericos y en minúscula.</span>
                <label htmlFor="password" className="FormUser--label">Contraseña</label>
                <input type="password" name="password" id="password" className="FormUser--input" {...register('password', {
                    required: true,
                    maxLength: 128,
                    minLength: 8,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#+/@$!%*?&-])[A-Za-z\d#+/@$!%*?&-]{8,}$/,
                        message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (@$!%*?&)'
                    }
                })} />
                <span className='FormUser--warn'>* La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (@$!%*?&).</span>
                <label htmlFor="birthday" className="FormUser--label">Fecha de Nacimiento</label>
                <input type="date" name="birthday" id="birthday" className="FormUser--input" {...register('birthday', {
                    valueAsDate: true
                })} />
            </div>
            <input type="submit" value={'Agregar usuario'} className="App--btn UserForm--submit" />
            <button type="button" className='App--btn FormUser--cancel' onClick={(e) => {
                resetForm();
                setUser(null);
            }}><i className="fa-solid fa-xmark"></i></button>
        </form>
    )
}

export default FormUser