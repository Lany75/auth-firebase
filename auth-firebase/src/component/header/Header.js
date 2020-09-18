import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import "./Header.css";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const deconnexion = () => {
    setUser(null);
  };

  return (
    <div id="header">
      <div id="message-accueil">
        Bonjour &nbsp;
        <b>
          {user === null
            ? "Visiteur"
            : user.displayName === null
            ? user.email
            : user.displayName}
        </b>
      </div>
      {user ? (
        <Button
          id="btn-deconnexion"
          variant="contained"
          disableElevation
          onClick={deconnexion}
        >
          Déconnexion
        </Button>
      ) : (
        <Button
          id="btn-deconnexion"
          variant="contained"
          disableElevation
          disabled
        >
          Déconnexion
        </Button>
      )}
    </div>
  );
};

export default Header;
