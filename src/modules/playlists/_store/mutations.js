const PLAYLISTS_UPDATED = (state, playlists) => {
  state.playlists = playlists;
};

const ACTIVE_PLY_UPDATED = (state, playlist) => {
  state.activePly = playlist;
};

export default {
  PLAYLISTS_UPDATED,
  ACTIVE_PLY_UPDATED,
};
