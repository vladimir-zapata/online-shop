import * as Service from "../../services/user/user.service";
import * as Validation from "../../validations/users/user.validations";

export const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    if(!Validation.validateNewUserRequest(fullName, email, password)) return res.sendStatus(400);
    const emailAlreadyRegistered = await Service.getUserByEmail(email);
    
    if (emailAlreadyRegistered !== null)
        return res.status(400).json({ message: "User already registered" });

    const user = await Service.registerUser(fullName, email, password);
    if(user === null) return res.sendStatus(500);

    return res.status(201).end();
};

export const getUsers = (req, res) => res.send("Getting users");
