export const validateNewUserRequest = (fullName, email, password) => {
    if(fullName === undefined || email === undefined || password === undefined) return false;

    return true;
};
