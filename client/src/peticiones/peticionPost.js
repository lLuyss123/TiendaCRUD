import { getAll } from "./peticionGet.js";
const formulario = document.getElementById("product-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  postProduct({
    productName: `${inputNombre.value}`,
    productDescription: `${inputDescrip.value}`,
    stock: `${inputStock.value}`,
    price: `${inputPrecio.value}`,
  });

  notificacion.innerHTML = `
    <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
      <p class="font-bold">Notificación</p>
      <p class="text-sm">Producto agregado correctamente.</p>
    </div>`;

  limpiarForm();
});

export async function postProduct(data2) {
  const respuesta = await fetch("http://localhost:8080/api/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data2),
  });
  
  getAll();
}
const inputNombre = document.getElementById("nombre-producto");
const inputPrecio = document.getElementById("precio-producto");
const inputStock = document.getElementById("stock-producto");
const inputDescrip = document.getElementById("descripcion-producto");
const notificacion = document.getElementById("alert-notificacion");

function limpiarForm() {
  inputNombre.value = "";
  inputPrecio.value = "";
  inputStock.value = "";
  inputDescrip.value = "";

  setTimeout(() => {
    notificacion.innerHTML = ``;
  }, 3000);
}

const botonLimpiar = document.getElementById("btn-cancel");
botonLimpiar.addEventListener("click", limpiarForm);
