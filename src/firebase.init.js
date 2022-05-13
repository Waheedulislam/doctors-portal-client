// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaaoomgUcYP0_lI4lWt2yXKMxSXXH6sb8",
    authDomain: "doctors-portal-42d35.firebaseapp.com",
    projectId: "doctors-portal-42d35",
    storageBucket: "doctors-portal-42d35.appspot.com",
    messagingSenderId: "257653775860",
    appId: "1:257653775860:web:cfeb5804bb7c6e07222da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth);