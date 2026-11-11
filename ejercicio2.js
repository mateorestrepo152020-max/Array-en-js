let listaNumeros = [];

const formulario = document.getElementById("formulario");
const numero = document.getElementById("numero");
const lista = document.getElementById("lista");
const suma = document.getElementById("suma");
const promedio = document.getElementById("promedio");
const mayor = document.getElementById("mayor");
const menor = document.getElementById("menor");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (numero.value === "") {
    alert("Ingrese un número");
    return;
  }

  let valor = parseFloat(numero.value);

  if (isNaN(valor)) {
    alert("Valor no válido");
    return;
  }

  listaNumeros.push(valor);
  numero.value = "";
  mostrarResultados();
});

function mostrarResultados() {
  lista.innerHTML = "";

  if (listaNumeros.length === 0) {
    suma.textContent = "";
    promedio.textContent = "";
    mayor.textContent = "";
    menor.textContent = "";
    return;
  }

  let total = 0;
  let numMayor = listaNumeros[0];
  let numMenor = listaNumeros[0];

  for (let i = 0; i < listaNumeros.length; i++) {
    lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
    total += listaNumeros[i];

    if (listaNumeros[i] > numMayor) {
      numMayor = listaNumeros[i];
    }
    if (listaNumeros[i] < numMenor) {
      numMenor = listaNumeros[i];
    }
  }

  let media = total / listaNumeros.length;

  suma.textContent = `Suma: ${total}`;
  promedio.textContent = `Promedio: ${media}`;
  mayor.textContent = `Número mayor: ${numMayor}`;
  menor.textContent = `Número menor: ${numMenor}`;
}
