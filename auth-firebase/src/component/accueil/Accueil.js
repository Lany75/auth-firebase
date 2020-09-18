import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import { AuthContext } from "../../context/authContext";
import { firebase } from "../../firebaseConfig";

import "./Accueil.css";

const Accueil = () => {
  const { user } = useContext(AuthContext);
  const [ancienPassword, setAncienPassword] = useState();
  const [nouveauPassword, setNouveauPassword] = useState();
  const [passWordVerif, setPasswordVerif] = useState();

  const modifierPassword = () => {
    if (
      ancienPassword === undefined ||
      ancienPassword === "" ||
      nouveauPassword === undefined ||
      nouveauPassword === "" ||
      passWordVerif === undefined ||
      passWordVerif === ""
    )
      alert("modification impossible");
    else {
      if (nouveauPassword === passWordVerif) {
        const currentUser = firebase.auth().currentUser;
        currentUser.updatePassword(nouveauPassword);
        setAncienPassword("");
        setNouveauPassword("");
        setPasswordVerif("");
        document.getElementById("ancien-password").value = "";
        document.getElementById("nouveau-password-1").value = "";
        document.getElementById("nouveau-password-2").value = "";
      }
    }
  };

  return (
    <>
      {user ? (
        <>
          <div id="userName">
            Nom : {user.displayName ? user.displayName : "non renseigné"}
          </div>
          <div id="userEmail">Email : {user.email}</div>
          <div id="modif-password">
            <div id="ancien-mdp">
              <TextField
                id="ancien-password"
                label="password actuel"
                type="password"
                onChange={(e) => setAncienPassword(e.target.value)}
              />
            </div>
            <div id="nouveau-mdp">
              <TextField
                id="nouveau-password-1"
                label="nouveau password"
                type="password"
                onChange={(e) => setNouveauPassword(e.target.value)}
              />
              <TextField
                id="nouveau-password-2"
                label="confirmer nouveau password"
                type="password"
                onChange={(e) => setPasswordVerif(e.target.value)}
              />
            </div>
            <div id="btn-modif-mdp">
              <Button
                id="btn-modif"
                variant="contained"
                disableElevation
                onClick={modifierPassword}
              >
                Modifier MDP
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>Vous devez être connecté pour voir les info du compte</div>
      )}
    </>
  );
};

export default Accueil;
