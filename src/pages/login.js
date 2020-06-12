import React from 'react';

//Contexts:
import { useAuth } from '../context/AuthContext';

function Login() {

  const { signIn } = useAuth();

  const handleChange = (e) => {
    e.preventDefault();

    const user = { 

      name: 'Matheus', 
      idade: 27, 
      login: 'admin', 
      senha: 'admin'  

    }

    signIn( user );
  }

  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={ handleChange }>
        <label>Login</label>
        <input />

        <label>Senha</label>
        <input />

        <button >Login In</button>
      </form>
    </div>
  );
}

export default Login;
