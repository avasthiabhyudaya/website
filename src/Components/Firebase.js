import firebase from 'firebase';
import firebaseApp from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQ7JNKxAscLckBPP6rHBCqfZDkG_IiZVo",
    authDomain: "portfolio-contact-responses.firebaseapp.com",
    projectId: "portfolio-contact-responses",
    storageBucket: "portfolio-contact-responses.appspot.com",
    messagingSenderId: "107724921812",
    appId: "1:107724921812:web:d6b8789e49caeec42ed441"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db }; 