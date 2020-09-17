import React, { createContext, useState } from "react";

/*const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};*/

export const AuthContext = createContext();

function AuthProvider({ children, user = null }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userMail, setUserMail] = useState();
  //const [accessToken, setAccessToken] = useState(null);

  /* React.useEffect(() => {
    if (user && !accessToken) {
      user.getIdToken().then((res) => {
        setAccessToken(res);
      });
    }
  }, [user]);*/

  //console.log("token : ", accessToken);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        setLoggedIn,
        userMail,
        setUserMail
        /*accessToken,
        setAccessToken,*/
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
