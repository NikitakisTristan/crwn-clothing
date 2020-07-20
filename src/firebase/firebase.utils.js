import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAz6w-GUr96cihvKsuMc2sfI4K0unI9oPU",
  authDomain: "crwn-db-852d1.firebaseapp.com",
  databaseURL: "https://crwn-db-852d1.firebaseio.com",
  projectId: "crwn-db-852d1",
  storageBucket: "crwn-db-852d1.appspot.com",
  messagingSenderId: "930127244357",
  appId: "1:930127244357:web:667b4de53ab19c8af8c72c",
  measurementId: "G-SL3WPBH915",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
