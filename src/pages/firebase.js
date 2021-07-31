import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration

    apiKey: "AIzaSyDxMI-h4ecNmXSxByl2fjILVQBC0kgBzGs",
    authDomain: "fair-air-form.firebaseapp.com",
    projectId: "fair-air-form",
    storageBucket: "fair-air-form.appspot.com",
    messagingSenderId: "821286187585",
    appId: "1:821286187585:web:eadbecc6ddf8faec028cc0"

  // Initialize Firebase
  
})
var db = firebaseApp.firestore();

export{db};