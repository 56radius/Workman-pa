// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgpDyOKg6TRV4JLk235Ie67NUN9XUoQ-E",
  authDomain: "workman-pa-64678.firebaseapp.com",
  projectId: "workman-pa-64678",
  storageBucket: "workman-pa-64678.appspot.com",
  messagingSenderId: "385402010408",
  appId: "1:385402010408:web:3b78ad51a5c42d1d99ee1d",
  measurementId: "G-XVR41V4C8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
