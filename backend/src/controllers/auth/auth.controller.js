import * as Service from "../../services/auth/auth.service";

export const login = async (req, res) => {
    const { email, password } = req.body;

    const token = await Service.loginUser(email, password);

    if(token === "") return res.status(400).json({message: "Wrong email or password."});
    if(token === null) return res.sendStatus(500);

    return res.status(200).json({token});
};