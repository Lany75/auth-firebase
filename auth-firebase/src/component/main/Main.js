import React from 'react';
import { Switch, Route } from "react-router-dom";
import Accueil from '../accueil/Accueil';
import Connexion from '../connexion/Connexion';
import Inscription from '../inscription/Inscription';

const Main = () => {
    return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/connexion" component={Connexion} />
        <Route render={() => <div>Tu t'es perdu</div>} />
      </Switch>
    </div>
    )
}

export default Main;