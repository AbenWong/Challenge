import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZNeiSXncUcftjY0mHOlCY_dhXRt-5Axo",
  authDomain: "netflix-clone-9ffb6.firebaseapp.com",
  projectId: "netflix-clone-9ffb6",
  storageBucket: "netflix-clone-9ffb6.appspot.com",
  messagingSenderId: "550811569223",
  appId: "1:550811569223:web:7921cb700db35ef0377562",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
