import * as Service from "../../services/user/user.service";

export const getUsers = async (req, res) => {
    const users = await Service.getAllUsers();

    if (users === null) return res.sendStatus(500);

    const userList = [];

    const mappedUsers = users.map((usr) => {
        const user = usr.get();

        userList.push({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });

        return userList[userList.length - 1];
    });

    return res.status(200).json(mappedUsers);
};
