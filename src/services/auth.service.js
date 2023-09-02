import axios from "axios";

class AuthService {
  login(username, email, password) {
    return axios
      .post("http://localhost:8080/users/login", {
        username,
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, confirmPassword) {
    return axios.post("http://localhost:8080/users", {
      username,
      email,
      password,
      confirmPassword
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

const AuthSer = new AuthService();
export default AuthSer;
