import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:3000';

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