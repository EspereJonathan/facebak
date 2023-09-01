import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080//users/:uid';

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
const UserSer = new UserService();
export default UserSer;
