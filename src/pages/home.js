import React from 'react';
import { useAuth } from '../context/AuthContext';

function Home({ history }) {

  const { signOut } = useAuth();

  return (
    <div>
      <h1> Home </h1>
      <button onClick={ () => history.push('/user') }>User</button>
      <button onClick={ signOut } >Sair</button>
    </div>
  );
}

export default Home;
