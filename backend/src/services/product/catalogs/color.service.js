import Color from "../../../models/product/catalogs/color.model";

export const getAllColors = async () => {
    try {
        return await Color.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};