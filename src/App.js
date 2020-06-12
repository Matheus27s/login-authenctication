import React from 'react';
import Routes from './routes';

//Contetxs:
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
