import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFEZJSEF7bkrzNJCLWrvTARas9qPJM1QI",
  authDomain: "chatter-1b236.firebaseapp.com",
  projectId: "chatter-1b236",
  storageBucket: "chatter-1b236.appspot.com",
  messagingSenderId: "229550875600",
  appId: "1:229550875600:web:f6b76c5383813b568e8fd5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
