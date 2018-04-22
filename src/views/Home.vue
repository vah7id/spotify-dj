<template>
  <div>
    <SearchBar />
    <Playlists />
    <Player />
  </div>
</template>

<script>
import SearchBar from '../modules/search';
import Playlists from '../modules/playlists';
import Player from '../modules/player';

export default {
  name: 'Home',
  components: {
    SearchBar,
    Playlists,
    Player,
  },
};
</script>
