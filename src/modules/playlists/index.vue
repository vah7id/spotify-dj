<template>
  <PlaylistsTab :playlists="playlists" />
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import PlaylistsTab from './_components/PlaylistsTab';

export default {
  name: 'Playlists',
  components: {
    PlaylistsTab,
  },
  computed: {
    ...mapGetters({
      playlists: '$_playlists/playlists',
    }),
  },
  created() {
    this.$store.registerModule('$_playlists', store);
  },
};
</script>
