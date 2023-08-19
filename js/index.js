// Import the functions you need from the SDKs you need
import { auth } from "./firebase.mjs";
import { onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

//login
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.email; 
      //const email = user.email;
      var num = uid.slice(0 , uid.lastIndexOf("@"));
      document.getElementById("userId").innerHTML = num;
    } else {
     // window.location.href = "index.html"
    }
  });

  document.getElementById("logoutbtn").addEventListener("click", ()=>{
      signOut(auth).then(() => {
        alert("you have signed out")
        window.location.href = "login.html"
      }).catch((error) => {
        alert(" error")
      });
  })