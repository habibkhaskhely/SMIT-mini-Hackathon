// Import the functions you need from the SDKs you need
import { auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

//login
let login = document.getElementById("loginForm");

login.addEventListener("submit", (e)=>{
    e.preventDefault()
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("loginPass").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Please try again")
  });
})
// end:: login
// Initialize Firebase
