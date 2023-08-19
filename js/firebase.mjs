// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEx6bmVP5OR3mK0hLlowS3lfZY_GNIXjQ",
  authDomain: "website-f10b1.firebaseapp.com",
  projectId: "website-f10b1",
  storageBucket: "website-f10b1.appspot.com",
  messagingSenderId: "667997159633",
  appId: "1:667997159633:web:bb9daea589a1863fd505f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
