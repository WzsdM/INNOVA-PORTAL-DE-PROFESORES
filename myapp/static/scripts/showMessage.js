export function showMessage(message,type = "success") {
Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "red",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function mostrarMensajeRegistroExitoso() {
  var mensaje = document.createElement('div');
  mensaje.textContent = 'Registro exitoso. Ahora puedes iniciar sesión con tu nueva cuenta.';
  mensaje.classList.add('mensaje-exito'); // Agrega una clase CSS para estilizar el mensaje si es necesario
  
  // Agrega el mensaje al documento
  document.body.appendChild(mensaje);
  
  // Elimina el mensaje después de unos segundos (opcional)
  setTimeout(function() {
      window.location.href = 'login.html';
    mensaje.remove();
  }, 2000); // Elimina el mensaje después de 5 segundos (ajusta el tiempo según tus necesidades)
}