import { getFirestore } from "firebase/firestore"



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1TIf_z2G0d9LdD8eHMSeGrBt5TZa-HcE",
  authDomain: "myuniloop.firebaseapp.com",
  projectId: "myuniloop",
  storageBucket: "myuniloop.firebasestorage.app",
  messagingSenderId: "744448812329",
  appId: "1:744448812329:web:807abf976f72b6de40c338",
  measurementId: "G-6KDHBYRJP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)