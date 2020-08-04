import axios from 'axios';
import 'firebase/auth';
import { baseUrl } from '../constants.json';

const getLoggedInUser = () => 1; // axios.get("myAPIURL/user/1")  

const addUserToDatabase = (userObj) => axios.post(`${baseUrl}/user`, userObj);

export { getLoggedInUser, addUserToDatabase }