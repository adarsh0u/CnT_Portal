import axios from 'axios';

const url = 'http://localhost:5000';

export const login = () => axios.get(url);
export const register = (newUser) => axios.post(url, newUser);
export const updateUser = (id,updatedUser) => axios.patch(`${url}/:${id}`, updatedUser);


