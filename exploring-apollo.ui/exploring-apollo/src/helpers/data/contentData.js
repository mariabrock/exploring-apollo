import axios from 'axios';
import { baseUrl } from '../constants.json';

const getContent = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/content`)
  .then((result) => resolve(result.data))
  .catch((error) => reject(error));
});

const getContentById = (contentId) => axios.get(`${baseUrl}/content/${contentId}`);

export { getContent, getContentById };
