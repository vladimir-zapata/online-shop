import Category from "../../../models/product/catalogs/category.model";

export const getAllCategories = async () => {
    try {
        return await Category.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};