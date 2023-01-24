
export const logoutBackEnd = () => {
    localStorage.removeItem("user");
    console.log("logged out")
};

export const getCurrentUser = () => {
    const token = localStorage.getItem("user");
    if (token) {
        //JWT uses base64url, so using only atob (which uses base64) isn't enough.
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const decodedToken = JSON.parse(jsonPayload);
        return decodedToken.sub;

    }
    return null;
};

