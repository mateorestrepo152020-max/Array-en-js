// Arreglo con mínimo 8 nombres
const estudiantes = [
  "Ana López",
  "Carlos Ramírez",
  "María Gómez",
  "Juan Pérez",
  "Laura Martínez",
  "Pedro Sánchez",
  "Sofía Torres",
  "Diego Vargas",
  "Valentina Ruiz",
  "Andrés Castro"
];

const listaEstudiantes = document.getElementById("listaEstudiantes");
const inputBuscar = document.getElementById("buscar");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// Mostrar todos los estudiantes al cargar la página
function mostrarEstudiantes() {
  listaEstudiantes.innerHTML = "";
  for (let i = 0; i < estudiantes.length; i++) {
    listaEstudiantes.innerHTML += `<li>${estudiantes[i]}</li>`;
  }
}

mostrarEstudiantes();

btnBuscar.addEventListener("click", function () {
  let nombreBuscado = inputBuscar.value.trim();

  // Validar que el campo no esté vacío
  if (nombreBuscado === "") {
    alert("Escriba un nombre para buscar");
    return;
  }

  // Búsqueda sin importar mayúsculas/minúsculas usando find() y toLowerCase()
  let encontrado = estudiantes.find(function (estudiante) {
    return estudiante.toLowerCase() === nombreBuscado.toLowerCase();
  });

  if (encontrado) {
    resultado.textContent = `El estudiante "${encontrado}" SÍ está registrado.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `El estudiante "${nombreBuscado}" NO se encuentra registrado.`;
    resultado.style.color = "red";
  }
});
