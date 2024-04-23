// Function to handle the sign-in state
function verificarSesion() {
  const idUsuario = localStorage.getItem('userID');
  if (idUsuario) {
    // If there is a user ID, change the button text to "Cerrar Sesión"
    btnInicioSesion.textContent = "Cerrar Sesión";
    btnInicioSesion.addEventListener('click', cerrarSesion);
  } else {
    btnInicioSesion.textContent = "Iniciar Sesión";
    btnInicioSesion.addEventListener('click', function() {
      window.location.href = 'paginainiciodesesion.html';
    });
  }
}

// Function to handle logout
function cerrarSesion() {
  localStorage.removeItem('userID');
  verificarSesion(); // Verify session again
}

// Verify the session status when the page loads
verificarSesion();