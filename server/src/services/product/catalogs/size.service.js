import Size from "../../../models/product/catalogs/size.model";

export const getAllSizes = async () => {
    try {
        return await Size.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};