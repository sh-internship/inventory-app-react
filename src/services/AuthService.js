import { observable } from "mobx";
import { get } from 'lodash';
import client from './AxiosClientService';
import AuthData from './AuthorizationData';

import UsersStore from "../stores/UsersStore";
import UserModel from '../models/UserModel';


class AuthService {

  constructor() {
    this.tokenName = 'zoniToken';
  }

  login(login, password) {
    const data = JSON.stringify({
      login: login,
      password: password
    });

    return client.post('/api/auth', 
    data, 
    {
      headers: {
        'ContentType': 'application/json'
      },
<<<<<<< HEAD
      data: {
        login: login,
        password: password
      }
=======
>>>>>>> develop
    })
    .then(response => {
      console.log(response);
      if (response.data.token) {
        AuthData.setToken(response.data.token);
      }
    })
    .catch(err => {
      const status = get(err, 'response.status', null);

      if (status === 401) {
        throw new Error('Invalid credentials');
      }
    })
  }

  loggedIn() {
    const token = AuthData.getToken();
    
    if(!token) {
      return false;
    }
    
    AuthData.setToken(token);
    return true;
  }

  getProfile() {
    if (this.loggedIn()) {
      client.get('/api/users/current')
      .then(result => {
        const currentUser = new UserModel(result.data);
        UsersStore.setUser(currentUser);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      // Redirect to login screen 
    }
  }

  logout() {
    AuthData.setToken(null);
    UsersStore.deleteUser();
    localStorage.removeItem(this.tokenName);
  }
}

export default new AuthService();