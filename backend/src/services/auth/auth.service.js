import User from "../../models/user/user.model";
import "../../config";

import * as UserService from "../user/user.service";
import * as Bcrypt from "../../utils/bcryptUtils";

import jwt from "jsonwebtoken";


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

export const loginUser = async (email, password) => {
    try {
        const user = await UserService.getUserByEmail(email);

        if (user) {
            const isValidPassword = await Bcrypt.checkPassword(
                password,
                user.get().password,
                user.get().salt
            );

            if (!isValidPassword) return "";

            const token = jwt.sign({ email, role: user.get().role }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });

            return token;
        } else {
            return "";
        }
    } catch (error) {
        console.log(error.message);
        return null;
    }
};