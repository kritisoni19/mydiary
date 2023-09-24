// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl1q0fRBJowThn0qL1lUvDvOe_2kbCJDg",
  authDomain: "my-diary-entry.firebaseapp.com",
  projectId: "my-diary-entry",
  storageBucket: "my-diary-entry.appspot.com",
  messagingSenderId: "468180088299",
  appId: "1:468180088299:web:fefe810276d4203ae055ae",
  measurementId: "G-0251SWJQX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);