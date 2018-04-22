import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  currentTrack: {
    title: 'Uknown Title',
    artist: 'Unkown Artist',
    src: null,
    pic: '',
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
