import * as constants from '../../../constants';

const addTrack = ({ commit, state }, track) => new Promise((resolve) => {
  state.playlists[state.activePly].push(track);
  commit(constants.PLAYLISTS_UPDATED, state.playlists);
  resolve(track);
});

const removeTrack = ({ commit, state }, track) => new Promise((resolve) => {
  const index = state.playlists[state.activePly].indexOf(track);
  if (index > -1) {
    state.playlists[state.activePly].splice(index, 1);
    commit(constants.PLAYLISTS_UPDATED, state.playlists);
    resolve(track);
  }
});

const switchPlaylist = ({ commit }, playlist) => new Promise((resolve) => {
  commit(constants.ACTIVE_PLY_UPDATED, playlist);
  resolve(playlist);
});

export default {
  addTrack,
  removeTrack,
  switchPlaylist,
};
