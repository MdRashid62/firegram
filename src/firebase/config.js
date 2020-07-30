import * as firebase from 'firebase/app';
import 'firebase/storage'; //to store ouur images
import 'firebase/firestore'; //our database

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOrTl-RmroiwmQcEMSK_2wLCM-V58M5aI",
    authDomain: "ninja-firegram-69137.firebaseapp.com",
    databaseURL: "https://ninja-firegram-69137.firebaseio.com",
    projectId: "ninja-firegram-69137",
    storageBucket: "ninja-firegram-69137.appspot.com",
    messagingSenderId: "907028134896",
    appId: "1:907028134896:web:c80b67a7297aadd6a97b35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };