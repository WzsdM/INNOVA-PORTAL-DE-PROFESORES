
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const siginupForm = document.querySelector('#signup-form');



siginupForm.addEventListener('submit',async(e) =>{
    e.preventDefault();
    const email = siginupForm['singup-email'].value
    const password = siginupForm['singup-password'].value
    console.log(email,password);

   
    try {
    
        const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)
        showMessage("Bienvenido " + userCredential.user.email)
        
        
    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        //gestor de errores
        if (error.code === 'auth/email-already-in-use'){
            showMessage("El Email ya existe", "error")
        }else if (error.code === 'auth/invalid-email') {
            showMessage("Email invalido", "error")
        }else if (error.code === 'auth/weak-password'){
            showMessage("La contraseña es muy devil", "error")
        }else if (error.code){
            showMessage("Upps!! a sucedido un error", "error")
        }
    }
})
