const token = localStorage.getItem("token").replaceAll('"', "");

export const config = {
    headers: { Authorization: `Bearer ${token}` }
};

