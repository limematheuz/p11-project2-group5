const listaNombres = [];
const listaElement = document.getElementById("listaNombres");

function agregarNombre() {
    // Obtener el valor del campo de entrada de texto
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();

    // Verificar que el nombre no esté vacío
    if (nombre !== "") {
        // Agregar el nombre a la matriz listaNombres
        listaNombres.push(nombre);
        nombreInput.value = ""; // Limpiar el campo de entrada

        // Crear un nuevo elemento de lista (<li>) y agregarlo a la lista
        const li = document.createElement("li");
        li.innerHTML = `${nombre} <span class="borrar" onclick="borrarNombre(${listaNombres.length - 1})">Eliminar</span>`;
        listaElement.appendChild(li);
    }
}

function borrarNombre(index) {
    listaNombres.splice(index, 1); // Elimina el nombre de la matriz
    const listItem = listaElement.childNodes[index]; // Encuentra el elemento de lista a eliminar
    listaElement.removeChild(listItem); // Elimina el elemento de lista
}


function borrarNombres() {
    listaNombres.length = 0; // Vacía la matriz listaNombres
    listaElement.innerHTML = ""; // Elimina todos los elementos de la lista
}

