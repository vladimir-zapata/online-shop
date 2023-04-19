import "../config";
import jwt from "jsonwebtoken";

export const adminOnly = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (decodedToken.role !== 2) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    });
};
