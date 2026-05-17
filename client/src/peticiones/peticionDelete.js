import { getAll } from "./peticionGet.js";

document.getElementById("inventory-list").addEventListener("click", function(e) {
    const boton=e.target.closest(".btn-eliminar")
  if (boton) {
    console.log(boton.getAttribute("btn-id"));
    deleteProduct(boton.getAttribute("btn-id"))
  }
});

export async function deleteProduct(id) {
  const respuesta = await fetch(`http://localhost:8080/api/${id}`, {
    method: "DELETE",
  });

  if (!respuesta.ok) {
    console.error("No se pudo eliminar el producto");
    return;
  }

  getAll();
}

