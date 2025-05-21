// Función para cargar el contenido HTML en el div de contenido dinámico
async function cargarHtml(page) {
    try {
        const response = await fetch(`./secciones/${page}.html`);
        const texto = await response.text();
        document.getElementById("contenido-html").innerHTML = texto;
    } catch (error) {
        console.error("Error al cargar el contenido: ", error);
        document.getElementById("contenido-html").innerHTML = "<p class='text-danger'>Hubo un error al cargar el contenido.</p>";
    }
}

// Manejar los clics en los enlaces para cargar el contenido adecuado
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[data-page]").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const page = e.target.getAttribute("data-page");
            cargarHtml(page); // Cargar el contenido correspondiente
        });
    });

    // Cargar el contenido por defecto al cargar la página
    cargarHtml("HOME"); // Se puede cambiar "Formation" por cualquier página por defecto
});
