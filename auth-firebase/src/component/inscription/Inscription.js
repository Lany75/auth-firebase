import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Inscription.css";

const Inscription = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVerif, setPasswordVerif] = useState();

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
          //onClick={inscription}
        >
          S&apos;inscrire
        </Button>
      </div>
    </div>
  );
};

export default Inscription;
