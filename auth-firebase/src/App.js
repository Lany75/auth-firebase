import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from './component/main/Main';
import Header from './component/header/Header';
import Navigation from './component/navigation/Navigation';

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userMail,setUserMail] = useState();

  return (
    <AuthContext.Provider value = {{isLoggedIn, setLoggedIn, userMail, setUserMail}}>
      <BrowserRouter>
        <div className="App">
            <Header />
            <Navigation />
            <Main />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
