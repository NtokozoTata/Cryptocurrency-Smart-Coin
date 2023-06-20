    
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDdZ4183OV304LxspxuSPl_cO5YF0vkKXo",
  authDomain: "smart-coins-63dc8.firebaseapp.com",
  projectId: "smart-coins-63dc8",
  storageBucket: "smart-coins-63dc8.appspot.com",
  messagingSenderId: "112499912382",
  appId: "1:112499912382:web:6a7dec47492a4c3da0f8ef",
  measurementId: "G-6EYVDJE7JX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;








