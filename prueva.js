// Función para filtrar los cursos según la búsqueda
function filterCourses() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var courses = document.getElementsByClassName('contenedor-pequeno');

    for (var i = 0; i < courses.length; i++) {
        var tags = courses[i].getAttribute('data-tags').toLowerCase();
        if (tags.includes(input)) {
            courses[i].style.display = 'block';
        } else {
            courses[i].style.display = 'none';
        }
    }
}

// Event listener para detectar cambios en la barra de búsqueda
document.getElementById('searchInput').addEventListener('input', filterCourses);
