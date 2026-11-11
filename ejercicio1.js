let listaNombres = [];

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const lista = document.getElementById("lista");
const cantidad = document.getElementById("cantidad");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Ingrese un nombre");
    return;
  }

  listaNombres.push(nombre);
  mostrarNombres();

  inputNombre.value = "";
  inputNombre.focus();
});

function mostrarNombres() {
  lista.innerHTML = "";

  for (let i = 0; i < listaNombres.length; i++) {
    lista.innerHTML += `<li>${listaNombres[i]}</li>`;
  }

  cantidad.textContent = `Total de nombres registrados: ${listaNombres.length}`;
}
