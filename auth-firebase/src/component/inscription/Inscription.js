import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Inscription.css";

import { AuthContext } from "../../context/authContext";

import firebase from "../../firebaseConfig";

const Inscription = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerif, setPasswordVerif] = useState();
  const Auth = useContext(AuthContext);

  const inscription = () => {
    if (
      email === "" ||
      email === undefined ||
      password === "" ||
      password === undefined
    )
      alert("email & password obligatoires");
    else {
      if (password !== passwordVerif) alert("passwords invalides");
      else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) {
              console.log("res.user : ", res.user);
              Auth.setLoggedIn(true);
              Auth.setUserMail(res.user.email);
              setEmail("");
              setPassword("");
              setPasswordVerif("");
              document.getElementById("mail").value = "";
              document.getElementById("password").value = "";
              document.getElementById("verif-password").value = "";
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    }
  };

  return (
    <div id="inscription">
      <div id="mail-password">
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
