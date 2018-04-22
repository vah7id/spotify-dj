const checkAuth = (response) => {
  if (JSON.parse(response).error) {
    if (JSON.parse(response).error.status === 401 ||
      JSON.parse(response).error.status === 400) {
      window.location.assign('/');
      window.localStroage.removeItem('spotify_token');
    }
  }
};

export default {
  checkAuth,
};
