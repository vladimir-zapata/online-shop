import * as AuthService from "../../services/auth/auth.service";
import * as UserService from "../../services/user/user.service";
import * as Validation from "../../validations/users/user.validations";

export const register = async (req, res) => {
    const { fullName, email, password } = req.body;

    if(!Validation.validateNewUserRequest(fullName, email, password)) return res.sendStatus(400);
    const emailAlreadyRegistered = await UserService.getUserByEmail(email);
    
    if (emailAlreadyRegistered !== null)
        return res.status(400).json({ message: "User already registered" });

    const user = await AuthService.registerUser(fullName, email, password);
    if(user === null) return res.sendStatus(500);

    return res.status(201).end();
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const token = await AuthService.loginUser(email, password);

    if(token === "") return res.status(400).json({message: "Wrong email or password."});
    if(token === null) return res.sendStatus(500);

    return res.status(200).json({token});
};