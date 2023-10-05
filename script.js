const listaCampers = [];   // listaNombres
const elementCampers = document.getElementById("listaNombres");  // listaElement



function agregarNombre() {
    // Obtener el valor del campo de entrada de texto
    const camperRecibido = document.getElementById("nombre");  //nombreInput
    const camper = camperRecibido.value.trim();  //nombre

    // Verificar que el nombre no esté vacío
    if (camper !== "") {
        // Agregar el nombre a la matriz listaNombres
        listaCampers.push(camper);
        camperRecibido.value = ""; // Limpiar el campo de entrada

        // Crear un nuevo elemento de lista (<li>) y agregarlo a la lista
        const li = document.createElement("li");
        li.innerHTML = `${camper} <button onclick="borrarNombre(${listaCampers.length - 1})"  ><img class="btn-cerrar" src="/static/img/borrar-03.svg" alt="cerrar"  /></button>`;
        elementCampers.appendChild(li);
    }
}



function borrarNombre(campesinos) {
    listaCampers.splice(campesinos, 1); // Elimina el nombre de la matriz
    const listItem = elementCampers.childNodes[campesinos]; // Encuentra el elemento de lista a eliminar
    elementCampers.removeChild(listItem); // Elimina el elemento de lista
}



function borrarNombres() {
    listaCampers.length = 0; // Vacía la matriz listaNombres
    elementCampers.innerHTML = ""; // Elimina todos los elementos de la lista
}


document.addEventListener("DOMContentLoaded", function() {
    let botonAnimaciones = document.getElementById("activarAnimaciones");
    let imagen1 = document.getElementById("ovniId");
    let imagen2 = document.getElementById("resplandorId");
    let imagen3 = document.getElementById("personId");
  
    // Agrega un evento de clic al botón
    botonAnimaciones.addEventListener("click", function() {
      // Agrega clases CSS con animaciones a las imágenes
      imagen1.classList.toggle("ovni");
      imagen2.classList.toggle("resplandor");
      imagen3.classList.toggle("person");
    });
  });