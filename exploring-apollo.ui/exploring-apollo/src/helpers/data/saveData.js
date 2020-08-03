import axios from 'axios';
import 'firebase/auth';
import { baseUrl } from '../constants.json';

const getMostRecentUserInstance = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/saveprogress/mostrecent/${userId}`)
  .then((result) => resolve(result))
  .catch((error) => reject(error));
}); 

const saveUserInstance = (userId) => axios.post(`${baseUrl}/saveprogress`, userId);

export default{ saveUserInstance, getMostRecentUserInstance }