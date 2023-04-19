import Photo from "../../../models/product/catalogs/photo.model";

export const getAllPhotos = async () => {
    try {
        return await Photo.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};