import axios from 'axios';
import { baseUrl } from '../constants.json';

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/event`)
  .then((result) => resolve(result.data))
  .catch((error) => reject(error));
});

const getEventsByMissionId = (missionId) => axios.get(`${baseUrl}/event/${missionId}`);

export { getAllEvents, getEventsByMissionId };