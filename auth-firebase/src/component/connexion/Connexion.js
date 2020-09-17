import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Connexion.css";
import firebase from "../../firebaseConfig";
import { AuthContext } from "../../context/authContext";

const Connexion = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Auth = useContext(AuthContext);
  //const { signInWithGoogle } = useContext(AuthContext);

  const connexion = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          Auth.setLoggedIn(true);
          Auth.setUserMail(res.user.email);
          setEmail("");
          setPassword("");
          document.getElementById("mail").value = "";
          document.getElementById("password").value = "";
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const connexionGoogle = () => {
    console.log("connexion google");
    /* const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        Auth.setLoggedIn(true);
      });*/
  };

  return (
    <>
      <div id="connexion">
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
        </div>
        <div id="bouton">
          <Button
            id="btn-connexion"
            variant="contained"
            disableElevation
            onClick={connexion}
          >
            Se Connecter
          </Button>
        </div>
      </div>
      <div id="connexion-google">
        <Button
          id="btn-connexion-google"
          variant="contained"
          color="primary"
          disableElevation
          onClick={connexionGoogle}
        >
          Connexion avec Google
        </Button>
      </div>
    </>
  );
};

export default Connexion;
