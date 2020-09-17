import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBo6feLgCJfd8OZFOvJowst5jM1IHKTsaI",
  authDomain: "auth-firebase-75d17.firebaseapp.com",
  databaseURL: "https://auth-firebase-75d17.firebaseio.com",
  projectId: "auth-firebase-75d17",
  storageBucket: "auth-firebase-75d17.appspot.com",
  messagingSenderId: "315541632754",
  appId: "1:315541632754:web:316cc3b28ef4ca331e026b",
  measurementId: "G-KB91L3HMJ0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebase, firebaseApp as default };
