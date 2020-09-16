import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Connexion.css";

const Connexion = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
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
          //onClick={connexion}
        >
          Se Connecter
        </Button>
      </div>
    </div>
  );
};

export default Connexion;
