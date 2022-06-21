import { useState, useEffect } from 'react';
import UsersList from './Components/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async url => {
      const data = await fetch('https://users-crud1.herokuapp.com/users/').then(res => res.json());
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1 className='App--title'>Administración de usuarios</h1>
      <div className="App--table-container">
        <UsersList users={users}/>
      </div>
    </div>
  )
}

export default App
