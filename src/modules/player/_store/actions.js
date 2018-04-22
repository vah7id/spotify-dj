import * as constants from '../../../constants';

const playTrack = ({ commit }, track) => new Promise((resolve) => {
  const newTrack = {
    title: track.name,
    artist: track.artists[0].name,
    src: track.preview_url,
    pic: track.album.images[0].url,
  };
  commit(constants.CURRENT_TRACK_UPDATED, newTrack);
  resolve(track);
});

export default {
  playTrack,
};
