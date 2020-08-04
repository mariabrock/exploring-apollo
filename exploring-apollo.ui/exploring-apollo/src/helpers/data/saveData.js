import axios from 'axios';
import 'firebase/auth';
import { baseUrl } from '../constants.json';

const getMostRecentUserInstance = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/saveprogress/mostrecent/${userId}`)
  .then((result) => resolve(result))
  .catch((error) => reject(error));
}); 

const saveUserInstance = (userObj) => {
  console.log(userObj)
   return axios.post(`${baseUrl}/saveprogress`, userObj);
}

export { saveUserInstance, getMostRecentUserInstance }