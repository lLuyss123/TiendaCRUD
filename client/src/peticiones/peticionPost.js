import { getAll } from "./peticionGet.js";
const formulario = document.getElementById("product-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
export async function postProduct(data2) {
    
  const respuesta = await fetch("http://localhost:8080/api/", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data2),
  });

  getAll()
}


