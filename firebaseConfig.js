// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhjIVFQWEpkBEgKHq9YgH-nUd6dV3sHU",
  authDomain: "calmcord.firebaseapp.com",
  projectId: "calmcord",
  storageBucket: "calmcord.appspot.com",
  messagingSenderId: "389842486941",
  appId: "1:389842486941:web:f1845b527ddcbe138b3674",
  measurementId: "G-T84KN1T608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // For Authentication
const db = getFirestore(app); // For Firestore Database
const analytics = getAnalytics(app); // For Analytics (Optional)

export { app, auth, db, analytics };
