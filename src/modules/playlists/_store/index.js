import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  playlists: {
    'PLY-A': [],
    'PLY-B': [],
  },
  activePly: 'PLY-A',
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
