import User from "../../models/user.model";
import "../../config";

import * as UserService from "../user/user.service";
import * as Bcrypt from "../../utils/bcryptUtils";
import jwt from "jsonwebtoken";

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

            const token = jwt.sign({ email }, process.env.JWT_SECRET, {
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
