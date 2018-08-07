import * as axios from 'axios';
import AuthData from './AuthorizationData';

class ApiClient {

  client;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://185.238.72.22:3400',
      headers: {
        'Authorization': 'Bearer ' + AuthData.getToken()
      }
    });
  }

  getInstance() {
      return this.client;
  }

  updateToken() {
    this.client = axios.create({
      headers: {
        'Authorization': 'Bearer ' + AuthData.getToken()
      }
    });
  }
}

export default new ApiClient();








/*
------------
NOTES
------------

/api/users - CRUD + json-server extensions
/api/devices - CRUD + json-server extensions, additional query param `search` for search deep
/api/offices - CRUD + json-server extensions
/api/places - CRUD + json-server extensions
/api/identify/{id} - only GET, accept params: id
/api/users/current - get user data checking his token
*/