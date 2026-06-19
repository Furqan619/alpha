// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVW8Eu_0lN7L-di9p2Ff4GQmyF9DIU-v0",
  authDomain: "alpha-web-tech.firebaseapp.com",
  projectId: "alpha-web-tech",
  storageBucket: "alpha-web-tech.firebasestorage.app",
  messagingSenderId: "1015798724187",
  appId: "1:1015798724187:web:7c01e0c05a34cab93f317e",
  measurementId: "G-87PB7F9WPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };