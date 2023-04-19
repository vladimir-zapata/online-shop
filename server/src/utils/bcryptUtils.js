import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    return { hashedPassword, salt};
};

export const checkPassword = async (password, hashedPassword, salt) => {
    const isValidPassword = await bcrypt.hash(password, salt);
    return hashedPassword === isValidPassword;
};
