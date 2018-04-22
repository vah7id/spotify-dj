import api from '../_api';
import * as constants from '../../../constants';

const getTracks = ({ commit }, queryString) => new Promise((resolve, reject) => {
  api.searchTracks(queryString, (response) => {
    commit(constants.TRACKS_UPDATED, response);
    if (response.status === 'error') {
      reject(response.data);
    } else {
      resolve(response.data);
    }
  });
});

export default {
  getTracks,
};
