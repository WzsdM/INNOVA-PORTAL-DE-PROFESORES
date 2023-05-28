 // Import the functions you need from the SDKs you need
 // verificar que las versiones tanto de auth como el app firebase sean iguales (9.22.0) 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyDdIXxUgrbta6Jf-6sPfpN-zrnDKxcSNdY",
     authDomain: "fb-3ppandaparticularprofessor.firebaseapp.com",
     projectId: "fb-3ppandaparticularprofessor",
     storageBucket: "fb-3ppandaparticularprofessor.appspot.com",
     messagingSenderId: "455784412097",
     appId: "1:455784412097:web:8dfcc026baab6aefb1b540"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 
 console.log(app)