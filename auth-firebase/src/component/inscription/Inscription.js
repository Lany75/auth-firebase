import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Inscription.css";
import { AuthContext } from "../../context/authContext";
import firebase from "../../firebaseConfig";

const Inscription = () => {
  //const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerif, setPasswordVerif] = useState();
  const { setUser } = useContext(AuthContext);
  let history = useHistory();

  const inscription = () => {
    if (
      // userName === "" ||
      //userName === undefined ||
      email === "" ||
      email === undefined ||
      password === "" ||
      password === undefined
    )
      alert("nom, email & password obligatoires");
    else {
      if (password !== passwordVerif) alert("passwords invalides");
      else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            //res.user.updateProfile({ displayName: userName });
            setUser(res.user);
            history.push("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }
  };

  return (
    <div id="inscription">
      <div id="nom-mail-password">
        {/*<TextField
          id="nom"
          label="Nom de l'utilisateur"
          onChange={(e) => setUserName(e.target.value)}
        />*/}
        <TextField
          id="mail"
          label="Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="verif-password"
          label="Password, encore"
          type="password"
          onChange={(e) => setPasswordVerif(e.target.value)}
        />
      </div>
      <div id="bouton">
        <Button
          id="btn-inscription"
          variant="contained"
          disableElevation
          onClick={inscription}
        >
          S&apos;inscrire
        </Button>
      </div>
    </div>
  );
};

export default Inscription;
