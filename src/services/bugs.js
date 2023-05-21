import axios from "axios";
const baseUrl = "https://bughive-rest-api.onrender.com/api/bugs";
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(baseUrl, config);
  return response.data;
};

const get = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(`${baseUrl}/${id}`, config);
  return response.data;
};

const create = async (newBug) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newBug, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const update = async (id, newBug) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(`${baseUrl}/${id}}`, newBug, config);
  return response.data;
};

export { setToken, getAll, get, create, remove, update };
