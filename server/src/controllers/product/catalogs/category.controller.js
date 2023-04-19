import * as Service from '../../../services/product/catalogs/category.service';

export const getCategories = async (req, res) => {
    const category = await Service.getAllCategories();

    return res.status(200).json(category);
}

export const createCategory = async (req, res) => {
    const {categoryName} = req.body;

    const category = await Service.addCategory(categoryName);

    if(category === null) return res.status(500).end();

    return res.status(200).json(category);
}