import User from "../../models/user.model";
import * as Bcrypt from "../../utils/bcryptUtils";

export const getUserByEmail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

export const registerUser = async (fullName, email, password) => {
    const salt = await Bcrypt.hashPassword(password);

    try {
        const user = await User.create({
            fullName,
            email,
            password: salt.hashedPassword,
            salt: salt.salt,
            role: 1 // FOR USERS
        });

        return user;
    } catch (error) {
        console.log(error.message);
        return null;
    }
};