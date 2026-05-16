import { getAll } from "./peticionGet.js";
const formulario = document.getElementById("product-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
export async function postProduct(data2) {
  const respuesta = await fetch("http://localhost:8080/api/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data2),
  });

  getAll();
}

const botonCrear = document.getElementById("btn-crear");

const inputNombre = document.getElementById("nombre-producto");
const inputPrecio = document.getElementById("precio-producto");
const inputStock = document.getElementById("stock-producto");
const inputDescrip = document.getElementById("descripcion-producto");

const data2 = botonCrear.addEventListener("click", () => {
  postProduct({
    productName: `${inputNombre.value}`,
    productDescription: `${inputDescrip.value}`,
    stock: `${inputStock.value}`,
    price: `${inputPrecio.value}`,
  });

  limpiarForm();
});

const botonLimpiar = document.getElementById("btn-cancel");
botonLimpiar.addEventListener("click", limpiarForm);
function limpiarForm() {
  inputNombre.value = "";
  inputPrecio.value = "";
  inputStock.value = "";
  inputDescrip.value = "";
}
