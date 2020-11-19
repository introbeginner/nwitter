import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain : process.env.REACT_APP_AUTH_DOMAIN,
  //authDomain: "nwitter-b02e7.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE_ID
};
// Initialize Firebase
//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();

/*
REACT_APP_API_KEY=AIzaSyDWwnipH9hT3xOkJkwOTeanKKP2ohdgm2w
REACT_APP_AUTH_DOMAIN=nwitter-b02e7.firebaseapp.com
REACT_APP_DATABASE_URL=https://nwitter-b02e7.firebaseio.com
REACT_APP_PROJECT_ID=nwitter-b02e7
REACT_APP_STORAGE_BUCKET=nwitter-b02e7.appspot.com
REACT_APP_MESSAGIN_ID=1011602635404
REACT_APP_APP_ID=1:1011602635404:web:2a60e5319e276d94f7d9a9
REACT_APP_MEASURE_ID=G-RLV5TDSZTY
*/