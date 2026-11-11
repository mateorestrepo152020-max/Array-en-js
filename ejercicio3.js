let productos = [];

const formulario = document.getElementById("formulario");
const inputProducto = document.getElementById("producto");
const inputPrecio = document.getElementById("precio");
const inputCantidad = document.getElementById("cantidad");
const tabla = document.getElementById("tabla");
const total = document.getElementById("total");
const productoMayor = document.getElementById("productoMayor");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = inputProducto.value.trim();
  let precio = parseFloat(inputPrecio.value);
  let cantidad = parseInt(inputCantidad.value);

  // Validaciones
  if (nombre === "" || isNaN(precio) || isNaN(cantidad)) {
    alert("Todos los campos son obligatorios y deben ser válidos");
    return;
  }

  if (precio < 0 || !Number.isFinite(precio)) {
    alert("El precio debe ser un número finito mayor o igual a cero");
    return;
  }

  if (cantidad <= 0 || !Number.isInteger(cantidad)) {
    alert("La cantidad debe ser un número entero mayor que cero");
    return;
  }

  // Agregar producto
  productos.push({
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  });

  // Limpiar campos
  inputProducto.value = "";
  inputPrecio.value = "";
  inputCantidad.value = "";
  inputProducto.focus();

  actualizarTabla();
});

function actualizarTabla() {
  tabla.innerHTML = "";

  if (productos.length === 0) {
    total.textContent = "El inventario está vacío";
    productoMayor.textContent = "";
    return;
  }

  let valorTotal = 0;
  let mayorPrecio = productos[0].precio;
  let nombreMayor = productos[0].nombre;

  for (let i = 0; i < productos.length; i++) {
    let subtotal = productos[i].precio * productos[i].cantidad;
    valorTotal += subtotal;

    if (productos[i].precio > mayorPrecio) {
      mayorPrecio = productos[i].precio;
      nombreMayor = productos[i].nombre;
    }

    tabla.innerHTML += `
      <tr>
        <td>${productos[i].nombre}</td>
        <td>${productos[i].precio}</td>
        <td>${productos[i].cantidad}</td>
        <td>${subtotal}</td>
        <td><button onclick="eliminarProducto(${i})">Eliminar</button></td>
      </tr>
    `;
  }

  total.textContent = `Valor total del inventario: ${valorTotal}`;
  productoMayor.textContent = `Producto con precio unitario más alto: ${nombreMayor} ($${mayorPrecio})`;
}

function eliminarProducto(indice) {
  productos.splice(indice, 1);
  actualizarTabla();
}
