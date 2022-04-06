import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBGMT8M-6mwwJJf5VcrRykpEhsA0UNRpS8",
    authDomain: "pro-71-638a1.firebaseapp.com",
    projectId: "pro-71-638a1",
    storageBucket: "pro-71-638a1.appspot.com",
    messagingSenderId: "347528976860",
    appId: "1:347528976860:web:e0a97d322fde77be885719"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
