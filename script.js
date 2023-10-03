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
    const randomIndex = Math.floor(Math.random() * listaNombres.length);
    const selectedName = listaNombres[randomIndex];
    document.getElementById("MyElement").className += " MyClass";
    alert(`Nombre seleccionado: ${selectedName}`);
}