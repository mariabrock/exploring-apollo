import axios from 'axios';
import { baseUrl } from '../constants.json';

const getContent = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/content`)
  .then((result) => resolve(result))
  .catch((error) => reject(error));
});

const getContentByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/content/eventId/${eventId}`)
  .then((result) => resolve(result))
  .catch((error) => reject(error));
});

export { getContent, getContentByEventId };
