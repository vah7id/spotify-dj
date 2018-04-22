import * as constants from '../../../constants';
import utilities from '../../../utilities';

const searchTracks = (queryString, callback) => {
  fetch(`${constants.SEARCH_URL}?q=${queryString}&type=tracks`, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('spotify_token'),
    },
  }).then(response => response.json()).then((response) => {
    utilities.checkAuth(response);
    callback({ status: 'success', data: JSON.parse(response).tracks });
  }).catch((error) => {
    utilities.checkAuth(error);
    callback({ status: 'error', data: error });
  });
};

export default {
  searchTracks,
};
