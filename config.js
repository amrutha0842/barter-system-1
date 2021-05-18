import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyAVfT6eRi5PkbOLMhzj3X6FKRp3IZLGWcE",
    authDomain: "barter-system-app-4a67d.firebaseapp.com",
    projectId: "barter-system-app-4a67d",
    storageBucket: "barter-system-app-4a67d.appspot.com",
    messagingSenderId: "462778453968",
    appId: "1:462778453968:web:6bccb03aa377a98a93f3d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();