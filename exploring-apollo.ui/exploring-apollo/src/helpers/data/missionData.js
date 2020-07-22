import axios from 'axios';
import { baseUrl } from '../constants.json';

const getAllMissions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mission`)
  .then((result) => resolve(result))
  .catch((error) => reject(error));
});

const getSelectedMissionById = (missionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mission/${missionId}`)
    .then((result) => resolve(result))
    .catch((error) => reject(error));
})


export { getAllMissions, getSelectedMissionById };