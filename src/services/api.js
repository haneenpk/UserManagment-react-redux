import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:3000';

export const checkAuth = async () => {
    try {
        return await axios.get(`${URL}/auth/checkauth`);
    } catch (error) {
        alert(error.response.data.message);
    }
};

export const registerUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data);
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log(error);
    }
};

export const logoutUser = async () => {
    try {
        return await axios.post(`${URL}/logout`);
    } catch (error) {
        console.log(error);
    }
};