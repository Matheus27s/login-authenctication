import React from 'react';

function User({ history }) {

  return (
    <div>
      <h1> User </h1>
      <ul>
        <li>Matheus Sousa</li>
        <li>Luma Ashilley</li>
        <li>Sandra Margareth</li>
        <li>Luck Shaw</li>
        <li>Ellen Rose</li>
      </ul>

      <button onClick={ () => history.push('/home') }>Home</button>
    </div>
  );
}

export default User;
