const listaNombres = [];
const listaElement = document.getElementById("listaNombres");

function agregarNombre() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();

    if (nombre !== "") {
        listaNombres.push(nombre);
        nombreInput.value = "";

        // Agregar el nombre a la lista
        const li = document.createElement("li");
        li.innerHTML = `${nombre} <span class="borrar" onclick="borrarNombre(${listaNombres.length - 1})">Eliminar</span>`;
        listaElement.appendChild(li);
    }
}

function borrarNombre(index) {
    listaNombres.splice(index, 1);
    const listItem = listaElement.childNodes[index];
    listaElement.removeChild(listItem);
}

function borrarNombres() {
    listaNombres.length = 0;
    listaElement.innerHTML = "";
}

function seleccionarAleatorio() {
    if (listaNombres.length > 0) {
        const randomIndex = Math.floor(Math.random() * listaNombres.length);
        const selectedName = listaNombres[randomIndex];
        
        // Encuentra el div para mostrar el nombre seleccionado
        const nombreSeleccionadoDiv = document.getElementById("nombreSeleccionado");
        
        // Muestra el nombre seleccionado en el div
        nombreSeleccionadoDiv.textContent = `Nombre seleccionado: ${selectedName}`;
    }
}