import axios from "axios";
import authService from './auth-header';

const register = (user) => {
  return axios.post(`http://localhost:5000/users/signup`, user);
};

const login = (user) => {
  return axios
    .post("http://localhost:5000/auth/signin", user, {headers: authService()})
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};