// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrHMOXcf9YNBZwxRo2wg1HX3nrbip07w",
  authDomain: "twitter-clone-dd14e.firebaseapp.com",
  projectId: "twitter-clone-dd14e",
  storageBucket: "twitter-clone-dd14e.appspot.com",
  messagingSenderId: "261300994671",
  appId: "1:261300994671:web:239917400497162332439a",
  measurementId: "G-LQJQGTMVGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = firebase.firestore();
export default db;