import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore,collection, addDoc, getDocs,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyAEx6bmVP5OR3mK0hLlowS3lfZY_GNIXjQ",
    authDomain: "website-f10b1.firebaseapp.com",
    projectId: "website-f10b1",
    storageBucket: "website-f10b1.appspot.com",
    messagingSenderId: "667997159633",
    appId: "1:667997159633:web:bb9daea589a1863fd505f0"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const db = getFirestore(app);


let addPost = document.getElementById("addPost")
addPost.addEventListener('click', async()=>{
    let itemName = document.getElementById("itemName").value;
    let itemDescription = document.getElementById("itemDescription").value; 
    
    try {
        const docRef = await addDoc(collection(db, "users"), {
            itemName: itemName,
            itemDescription: itemDescription,            
        });      
        alert("Your post has been successfully published.")
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("Please try again ")
            }

        })

      // get date
   
// show product
async function showpro(){ 
    let productShow = document.getElementById("productShow")
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    productShow.innerHTML += `
    <div class="shadow  w-100 m-auto p-5 my-2">
    <h4>${doc.data().itemName}</h4>
    <p>${doc.data().itemDescription}</p>
    
    <button class="btn btn-primary" onclick="delet('${doc.id}')">Delete</button>
    </div>    
    `
  console.log(`${doc.id} => ${doc.data()}`);
});

}
showpro();
// add and delete 
async function delet(id){
  await deleteDoc(doc(db, "users", id));
  alert("your post has deleted")
  //window.location.reload()
}
window.delet = delet


  
