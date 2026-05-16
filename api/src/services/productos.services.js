/* const Products = "../data/db.json" */
import { json } from "stream/consumers";
import Products from "../data/db.json" with {type:"json"};
import fs from "fs";
const rutaDB = '../api/src/data/db.json'


function escribirJson(){
    fs.writeFileSync(rutaDB,JSON.stringify(Products,null,4))
}


/**
 * Obtener todos los personajes
 *
 * @returns {Promise<Array<Object>>}
 * Retorna un arreglo con todos los personajes
 */
const getAllProducts = async () => {

    return Products;
};

/**
 * Obtener personaje por ID
 *
 * @param {number} id - ID del personaje a buscar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje encontrado o null si no existe
 */
const getProductById = async (id) => {

    /**
     * Buscar personaje dentro del arreglo
     */
    const product = Products.find(
        product => product.id === parseInt(id)
    );

    return product;
};

/**
 * Crear personaje
 *
 * Genera un nuevo objeto combinando:
 * - Un ID automático
 * - Las propiedades recibidas desde newProduct
 *
 * @param {Object} newProduct - Datos del nuevo personaje
 *
 * @returns {Promise<Object>}
 * Retorna el personaje creado
 */
const createProduct = async (newProduct) => {

    /**
     * Crear nuevo objeto utilizando
     * el operador spread (...)
     */
    const product = {

        /**
         * Generar ID incremental
         */
        id: Products.length + 1,

        /**
         * Expandir propiedades del nuevo personaje
         */
        ...newProduct
    };

    /**
     * Agregar personaje al arreglo
     */
    Products.push(product);
    escribirJson()
    
    return product;
};

/**
 * Actualizar personaje
 *
 * Busca un personaje por ID y reemplaza
 * únicamente las propiedades enviadas.
 *
 * @param {number} id - ID del personaje
 * @param {Object} data - Datos a actualizar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje actualizado o null si no existe
 */
const updateProduct = async (id, data) => {

    /**
     * Buscar índice del personaje
     */
    const index = Products.findIndex(
        product => product.id === parseInt(id)
    );

    /**
     * Validar si existe
     */
    if (index === -1) {
        return null;
    }

    /**
     * Combinar objeto actual
     * con los nuevos datos
     */
    Products[index] = {

        /**
         * Mantener propiedades actuales
         */
        ...Products[index],

        /**
         * Sobrescribir con nuevos valores
         */
        ...data
    };
    escribirJson()
    return Products[index];
};

/**
 * Eliminar personaje
 *
 * Busca un personaje por ID y lo elimina
 * del arreglo principal.
 *
 * @param {number} id - ID del personaje a eliminar
 *
 * @returns {Promise<Object|null>}
 * Retorna el personaje eliminado o null si no existe
 */
const deleteProduct = async (id) => {

    /**
     * Buscar índice del personaje
     */
    const index = Products.findIndex(
        product => product.id === parseInt(id)
    );

    /**
     * Validar existencia
     */
    if (index === -1) {
        return null;
    }

    /**
     * Guardar personaje eliminado
     */
    const deletedProduct = Products[index];

    /**
     * Eliminar personaje del arreglo
     */
    Products.splice(index, 1);
    escribirJson()
    return deletedProduct;
};

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
