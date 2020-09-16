import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from './component/main/Main';
import Header from './component/header/Header';

//import * as firebase from 'firebase';
//import firebaseApp from './firebaseConfig';
//import AuthProvider from './context/AuthContext';
//firebase.initializeApp(firebaseConfig);
//console.log(firebase);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userMail,setUserMail] = useState();

  return (
    <AuthContext.Provider value = {{isLoggedIn, setLoggedIn, userMail, setUserMail}}>
    {//<AuthProvider>
      <BrowserRouter>
        <p>est loggé : {JSON.stringify(isLoggedIn)}</p>
        <div className="App">
            <Header />
            <Main />
        </div>
      </BrowserRouter>
    //</AuthProvider>
  }
    </AuthContext.Provider>
  );
}

export default App;
