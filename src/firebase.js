import firebase from "firebase/app";
import "firebase/analytics";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDWwnipH9hT3xOkJkwOTeanKKP2ohdgm2w",
    authDomain: "nwitter-b02e7.firebaseapp.com",
    databaseURL: "https://nwitter-b02e7.firebaseio.com",
    projectId: "nwitter-b02e7",
    storageBucket: "nwitter-b02e7.appspot.com",
    messagingSenderId: "1011602635404",
    appId: "1:1011602635404:web:2a60e5319e276d94f7d9a9",
    measurementId: "G-RLV5TDSZTY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.initializeApp(firebaseConfig);