import { productModel } from "../models/modelo.js"

export async function createProduct(req, res) {
    const { name, description, stock, price } = req.body

    try {
        const newProduct = new productModel({
            name, description, stock, price
        })

        await newProduct.save()

        res.status(201).json({
            message: 'Product saved successfully',
            product: { id: newProduct.id, name: newProduct.title }
        })
    } catch (error) { res.status(500).json({ message: 'Error al registrar el Producto', error }); }

}


async function searchproduct(req, res) {
    const { name, description, stock, price } = req.query

    if (name) {
        const product = await productModel.findOne({ name: name });
        if (!product) {
            res.status(404).json({ message: "No se encontró el producto con ese Id." });
            return
        }
        res.json({ product });
        return;
    }

    const filterParams = {
        category: category ? { $in: [category] } : undefined,
        publicationYear: publicationYear ? Number(publicationYear) : undefined,
        publisher: publisher ? publisher as string : undefined,
        author: author ? author as string : undefined,
        title: title ? { $regex: new RegExp(title as string, "i") } : undefined,
        ISBN: ISBN ? ISBN as string : undefined,
    };

    const filter = Object.fromEntries(Object.entries(filterParams).filter(([_, v]) => v !== undefined));

    try {
        const products = await productModel.find(filter);
        if (products.length === 0) {
            res.status(404).json({ message: "No se encontraron productos con esos criterios." });
            return
        }
        res.status(200).json({ products });
        return
    } catch (error) {
        res.status(500).json({ error });
        return
    }

}

async function productUpdate(req: Request, res: Response) {
    const { ISBN } = req.params;
    const data = req.body;

    try {
        const updatedproduct = await productModel.findOneAndUpdate(
            { ISBN: ISBN, isActive: true },
            data,
            { new: true }
        );
        if (!updatedproduct) {
            res.status(404).json({ message: 'producto no encontrado' });
            return
        }
        res.status(200).json({
            message: 'producto actualizado con éxito',
            product: updatedproduct
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
}