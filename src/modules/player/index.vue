<template>
  <PlayerBox :currentTrack="currentTrack" />
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import PlayerBox from './_components/PlayerBox';

export default {
  name: 'Player',
  components: {
    PlayerBox,
  },
  computed: {
    ...mapGetters({
      currentTrack: '$_player/currentTrack',
    }),
  },
  created() {
    this.$store.registerModule('$_player', store);
  },
};
</script>
