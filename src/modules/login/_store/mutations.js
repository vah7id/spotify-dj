const AUTHORIZED_UPDATED = (state, auhorized) => {
  state.auhorized = auhorized;
};
const ACCESS_TOKEN_UPDATE = (state, token) => {
  state.token = token.status === 'success' ? token.data : null;
};

export default {
  AUTHORIZED_UPDATED,
  ACCESS_TOKEN_UPDATE,
};
