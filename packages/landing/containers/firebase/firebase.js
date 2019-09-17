import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyA44AWXUBUySKdSFnLfUGbkEyScSwGqU90",
  authDomain: "dhakon-app-6f0db.firebaseapp.com",
  databaseURL: "https://dhakon-app-6f0db.firebaseio.com",
  projectId: "dhakon-app-6f0db",
  storageBucket: "dhakon-app-6f0db.appspot.com",
  messagingSenderId: 604799294040
};

const devConfig = {
  apiKey: "AIzaSyA44AWXUBUySKdSFnLfUGbkEyScSwGqU90",
  authDomain: "dhakon-app-6f0db.firebaseapp.com",
  databaseURL: "https://dhakon-app-6f0db.firebaseio.com",
  projectId: "dhakon-app-6f0db",
  storageBucket: "dhakon-app-6f0db.appspot.com",
  messagingSenderId: 604799294040
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
