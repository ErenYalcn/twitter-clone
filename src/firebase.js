import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

const firebaseConfig =  {
  apiKey: "AIzaSyCrrHMOXcf9YNBZwxRo2wg1HX3nrbip07w",
  authDomain: "twitter-clone-dd14e.firebaseapp.com",
  projectId: "twitter-clone-dd14e",
  storageBucket: "twitter-clone-dd14e.appspot.com",
  messagingSenderId: "261300994671",
  appId: "1:261300994671:web:239917400497162332439a",
  measurementId: "G-LQJQGTMVGY"
};



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;




