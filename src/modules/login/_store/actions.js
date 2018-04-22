import api from '../_api';
import * as constants from '../../../constants';

const checkAuthorized = ({ commit }) => new Promise((resolve, reject) => {
  api.checkAuthorized((response) => {
    const auhorized = (response.status === 'success' && typeof response.data.error === 'undefined');
    commit(constants.AUTHORIZED_UPDATED, auhorized);
    if (response.status === 'error') {
      reject(auhorized);
    } else {
      resolve(auhorized);
    }
  });
});

const authorize = () => {
  api.authorize();
};

const getAccessToken = ({ commit }, code) => new Promise((resolve, reject) => {
  api.getAccessToken(code, (response) => {
    commit(constants.ACCESS_TOKEN_UPDATE, response);
    if (response.status === 'error') {
      reject(response);
    } else {
      resolve(response);
    }
  });
});

export default {
  checkAuthorized,
  authorize,
  getAccessToken,
};
