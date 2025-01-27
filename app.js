// Array para almacenar los nombres añadidos por el usuario
let amigos = [];

// Una función para agrgar el contenido del input a la lista de amigos
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Limpiar campo de texto a una cadena vacía y enviar el nombre guardado al array
    amigos.push(nombre);
    inputNombre.value = '';
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el DOM
// Limpiar la lista actual
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}




