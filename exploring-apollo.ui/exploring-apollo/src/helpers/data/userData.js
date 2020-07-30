import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import { baseUrl } from '../constants.json';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (err) => Promise.reject(err));

const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  .then((cred) => {
    cred.user.getIdToken()
      .then((token) => sessionStorage.setItem('token', token));
  })
  .catch((err) => console.error(err));

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((cred) => {
    cred.user.getIdToken()
      .then((token) => sessionStorage.setItem('token', token));
  });
};

const registerUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((cred) => {
    cred.user.getIdToken()
      .then((token) => {
        sessionStorage.setItem('token', token);
      });
  });

const addUserToDatabase = (userObj) => axios.post(`${baseUrl}/user`, userObj);

export default{ loginUser, loginWithGoogle, registerUser, addUserToDatabase }