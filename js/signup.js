// Import the functions you need from the SDKs you need
import{auth}from "./firebase.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let signup = document.getElementById("signupForm")
signup.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = document.getElementById("emailSignUp").value;
    let password = document.getElementById("passwordSignup").value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     alert("your account has been created")
     window.location.href = "login.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Please try again ")
  });

})

