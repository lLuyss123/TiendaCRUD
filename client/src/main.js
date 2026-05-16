import "./styles/globals.css";
import { getAll } from "./peticiones/peticionGet.js";
import { postProduct } from "./peticiones/peticionPost.js";


const botonCrear = document.getElementById("btn-crear");
getAll()
const data2 = botonCrear.addEventListener("click", () => {
    
  const inputNombre = document.getElementById("nombre-producto");
  const inputPrecio = document.getElementById("precio-producto");
  const inputStock = document.getElementById("stock-producto");
  const inputDescrip = document.getElementById("descripcion-producto");

    postProduct({
    "productName": `${inputNombre.value}`,
    "productDescription": `${inputDescrip.value}`,
    "stock": `${inputStock.value}`,
    "price": `${inputPrecio.value}`,
  });
  
});