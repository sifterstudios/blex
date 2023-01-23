
export const logoutBackEnd = () => {
    localStorage.removeItem("user");
    console.log("logged out")
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
        console.log("userStr: " + userStr);
        return JSON.parse(userStr);
    }


    return null;
};