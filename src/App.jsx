import { useState, useEffect } from 'react';
import UsersList from './Components/UsersList';
import './App.css';
import Modal from './Components/Modal';
import { useForm } from 'react-hook-form';

function App() {
  const [users, setUsers] = useState();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  const HookForm = useForm();

  const getUsers = async () => {
    const data = await fetch('https://users-crud1.herokuapp.com/users/').then(res => res.json());
    setUsers(data);
  };

  const handlerAddUser = () => {
    setModal(1);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1 className='App--title'>Administración de usuarios</h1>
      <div className="App--actions">
        <button className='App--btn App--btn__add' onClick={handlerAddUser} title="Crear nuevo usuario">
          <i className="fa-solid fa-user-plus"></i>
          Agregar
        </button>
        <button className='App--btn App--btn__add' onClick={(e) => getUsers()} title="Recargar tabla de usuarios">
          <i className="fa-solid fa-arrows-rotate"></i>
          Refrescar
        </button>
      </div>
      <div className="App--table-container">
        <UsersList
          users={users}
          setModal={setModal}
          setUser={setUser}
        />
      </div>
      {modal &&
        <Modal
          modal={modal}
          setModal={setModal}
          form={HookForm}
          getUsers={getUsers}
        user={user}
        setUser={setUser}
        />
      }
    </div>
  )
}

export default App
