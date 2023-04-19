import Product from "../../models/product/product.model";

export const getAllProduct = async () => {
    try {
        return await Product.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};