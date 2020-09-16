import React, { useContext } from 'react';
import { AuthContext } from '../../App';

const Accueil = () => {
    //const Auth = useContext(AuthContext);
    const {userMail} = useContext(AuthContext);
    userMail && console.log (userMail);
    //const {isLoggerIn,user} = useContext(AuthContext);
    //console.log(user)
return userMail ? <div>Bonjour {userMail}</div>:<div>Bonjour Visiteur</div>
}

export default Accueil;