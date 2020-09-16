import React, { useContext, useState } from 'react';
import {Button, TextField} from '@material-ui/core';
//import * as firebase from 'firebase';

import './Header.css';
import {AuthContext} from '../../App';
import firebase from '../../firebaseConfig';
//console.log(firebase);

const Header = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const Auth = useContext(AuthContext);

  const inscription = () =>{
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(res=>{
        if(res.user) {
          Auth.setLoggedIn(true);
          Auth.setUserMail(res.user.email);
        }
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const connexion = () =>{
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(res=>{
        //console.log(res.user.email)
        if(res.user) {
          Auth.setLoggedIn(true);
          Auth.setUserMail(res.user.email);
        }
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message);
      })
  }

  const deconnexion = () =>{
    Auth.setLoggedIn(false); 
    Auth.setUserMail(null);
  }

  return (
    <div className="header">
      <TextField id="mail" label="Mail" onChange={e=> setEmail(e.target.value)}/>
      <TextField id="password" label="Password" onChange={e=> setPassword(e.target.value)}/>
      <div id="boutons">
        <Button id="btn-inscription" variant="contained" disableElevation onClick={inscription}>Inscription</Button>
        <Button id="btn-connexion" variant="contained" disableElevation onClick={connexion}>Connexion</Button>
        <Button id="btn-deconnexion" variant="contained" disableElevation onClick={deconnexion}>Déconnexion</Button>
      </div>
    </div>
  )
}

export default Header;