import * as constants from '../../../constants';

const checkAuthorized = (callback) => {
  fetch(constants.CHECK_AUTHORIZE_URL, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('spotify_token'),
    },
  }).then(response => response.json()).then((response) => {
    callback({ status: 'success', data: JSON.parse(response) });
  }).catch((error) => {
    callback({ status: 'error', data: new Error(error) });
  });
};

const getAccessToken = (B64Code, callback) => {
  fetch(constants.GET_TOKEN_URL, {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'client_credentials',
      redirect_uri: constants.CALLBACK_AUTHORIZE,
      code: B64Code,
    }),
  }).then(response => response.json()).then((response) => {
    callback({ status: 'success', data: `Bearer ${response.access_token}` });
  }).catch((error) => {
    callback({ status: 'error', data: new Error(error) });
  });
};

const authorize = () => {
  window.location.assign(constants.AUTHORIZE_URL);
};

export default {
  checkAuthorized,
  authorize,
  getAccessToken,
};
