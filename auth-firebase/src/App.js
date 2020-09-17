import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Main from "./component/main/Main";
import Header from "./component/header/Header";
import Navigation from "./component/navigation/Navigation";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Main />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
