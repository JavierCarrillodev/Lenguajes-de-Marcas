function mostrarProductos() {
    const contenedor = document.getElementById('lista-productos');

    // Si la lista está visible, ocultarla
    if (contenedor.style.display === 'block') {
        contenedor.style.display = 'none';
    } else {
        // Si la lista está oculta, mostrarla y cargar los productos
        contenedor.style.display = 'block';

        // Solo cargamos los productos si aún no están cargados
        if (contenedor.innerHTML === '') {
            fetch('productos.xml')
                .then(response => response.text())
                .then(xmlString => {
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(xmlString, "application/xml");
                    const productos = xml.querySelectorAll('Producto');

                    /*Lo que hace este forEach es recorrer todos los productos dentro del XML
                    para crear una estructura HTML para cada uno de ellos.*/
                    productos.forEach(producto => {
                        const nombre = producto.querySelector('Nombre').textContent;
                        const precio = producto.querySelector('Precio').textContent;
                        const etiquetas = producto.querySelectorAll('Etiqueta');

                        const div = document.createElement('div');
                        div.className = 'producto';

                        /* Aquí se asigna contenido HTML al div
                        Y creamos una lista para que guarde las etiquetas
                        Tambien se usa el .map() para recorrer cada elemento de etiquetas
                        Y con el join unimos los span a un espacio en blanco*/
                        div.innerHTML = `
                            <div class="nombre"><strong>${nombre}</strong></div>
                            <div class="precio">Precio: $${precio}</div>
                            <div class="etiquetas">
                            
                                ${Array.from(etiquetas).map(et => `<span>${et.textContent}</span>`).join(' ')}
                            </div>
                        `;

                        contenedor.appendChild(div);
                    });
                })
                //Aqui hacemos manejo de errores
                .catch(error => {
                    console.error('Error al cargar el XML:', error);
                });
        }
    }
}
