import Brand from "../../../models/product/catalogs/brand.model";

export const getAllBrands = async () => {
    try {
        return await Brand.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};