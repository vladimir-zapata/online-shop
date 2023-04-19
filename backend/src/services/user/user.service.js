import User from "../../models/user/user.model";

export const getAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

export const getUserByEmail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

