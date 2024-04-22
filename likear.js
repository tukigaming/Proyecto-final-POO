
const likeButtons = document.querySelectorAll('.btn-like');

// Agregar un event listener a cada botón
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Cambiar el estado de "gustado" al hacer clic
        button.classList.toggle('liked');
    });
});
