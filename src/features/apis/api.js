import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cc2f1a18e850017decc60.mockapi.io'
});

export default api;