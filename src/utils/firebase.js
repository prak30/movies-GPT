// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVz5GqKcc8EDM5egup6e84UZNiE67SDGw",
  authDomain: "movies-gpt-d5cea.firebaseapp.com",
  projectId: "movies-gpt-d5cea",
  storageBucket: "movies-gpt-d5cea.appspot.com",
  messagingSenderId: "321045779667",
  appId: "1:321045779667:web:93f1c0121403f2d0ee7026",
  measurementId: "G-BBY6JXPYC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
