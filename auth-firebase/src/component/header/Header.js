import React from 'react';
import {Button} from '@material-ui/core';
import './Header.css';

const Header = () =>{
  return (
    <div id='header'>
      <div id="message-accueil">Bonjour <b>Visiteur</b></div>
      <Button id="btn-deconnexion" variant="contained" disabled disableElevation /*onClick={deconnexion}*/>Déconnexion</Button>
    </div>
  )
}

export default Header;




/*import React, { useContext, useState } from 'react';
import {Button, TextField} from '@material-ui/core';

import './Header.css';
import {AuthContext} from '../../App';
import firebase from '../../firebaseConfig';

const Header = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Auth = useContext(AuthContext);

  const inscription = () =>{
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(res=>{
        if(res.user) {
          Auth.setLoggedIn(true);
          Auth.setUserMail(res.user.email);
          document.getElementById('mail').value="";
          document.getElementById('password').value="";
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const connexion = () =>{
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(res=>{
        if(res.user) {
          Auth.setLoggedIn(true);
          Auth.setUserMail(res.user.email);
          document.getElementById('mail').value='';
          document.getElementById('password').value='';
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const deconnexion = () =>{
    Auth.setLoggedIn(false); 
    Auth.setUserMail(null);
    document.getElementById('mail').value="";
    document.getElementById('password').value="";
  }

  return (
    <div className="header">
        <TextField id="mail" label="Mail" onChange={e=> setEmail(e.target.value)}/>
        <TextField id="password" label="Password" type='password' onChange={e=> setPassword(e.target.value)}/>
        <div id="boutons">
          <Button id="btn-inscription" variant="contained" disableElevation onClick={inscription}>Inscription</Button>
          <Button id="btn-connexion" variant="contained" disableElevation onClick={connexion}>Connexion</Button>
          <Button id="btn-deconnexion" variant="contained" disableElevation onClick={deconnexion}>Déconnexion</Button>
        </div>
    </div>
  )
}

export default Header;*/