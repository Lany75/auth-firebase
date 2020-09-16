import React from 'react';
import { Switch, Route } from "react-router-dom";
import Accueil from '../accueil/Accueil';

const Main = () => {
    return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route render={() => <div>Tu t'es perdu</div>} />
      </Switch>
    </div>
    )
}

export default Main;