/*import React, {createContext, useState} from 'react';

//import * as firebase from 'firebase';
//import firebaseConfig from '../firebaseConfig';
//firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext();

function AuthProvider({children, user=null}) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    //console.log(user)

    React.useEffect(()=>{
        if (user) {
            console.log(user);
            setLoggedIn(true)
        }
    }, [user]);

    return (
        <AuthContext.Provider
            value={{user, isLoggedIn, setLoggedIn}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;*/