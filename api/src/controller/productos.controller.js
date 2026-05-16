import { log } from "console";
import {
    getAllProducts,
    getProductById,
    createProduct as createProductService,
    updateProduct as updateProductService,
    deleteProduct as deleteProductService
} from "../services/productos.services.js";


/**
 * GET - Obtener todos los personajes
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con la lista de personajes
 */
const getProducts = async (req, res) => {

    try {

        const products = await getAllProducts();

        return res.status(200).json({
            success: true,
            body: products
        });

    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * GET por ID - Obtener un personaje específico
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje encontrado
 */
const getProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const product = await getProductById(id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            body: product
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * POST - Crear personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.body - Datos del personaje enviados en el body
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje creado
 */
const createProduct = async (req, res) => {

    try {
        const newProduct = await createProductService(req.body);
        
        return res.status(201).json({
            success: true,
            body: newProduct
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * PUT - Actualizar personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje a actualizar
 * @param {Object} req.body - Datos actualizados del personaje
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON con el personaje actualizado
 */
const updateProduct = async (req, res) => {

    try {

        const updatedProduct = await updateProductService(
            req.params.id,
            req.body
        );

        if (!updatedProduct) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            body: updatedProduct
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * DELETE - Eliminar personaje
 *
 * @param {Object} req - Objeto de solicitud de Express
 * @param {Object} req.params - Parámetros enviados en la URL
 * @param {string} req.params.id - ID del personaje a eliminar
 * @param {Object} res - Objeto de respuesta de Express
 *
 * @returns {Promise<Object>} Respuesta JSON confirmando la eliminación
 */
const deleteProduct = async (req, res) => {

    try {

        const deletedProduct = await deleteProductService(
            req.params.id
        );

        if (!deletedProduct) {

            return res.status(404).json({
                success: false,
                message: "Personaje no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Personaje eliminado",
            body: deletedProduct
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};