<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <button class="btn-auth-spotify" v-on:click="doAuthorization()">
      <img width="300" :src="require('../../assets/login.svg')" alt="Spotify Login" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import router from '../../router';

export default {
  name: 'LoginBySpotify',
  data() {
    return {
      fullscreenLoading: true,
    };
  },
  created() {
    this.$store.registerModule('$_login', store);
    this.$store.dispatch('$_login/checkAuthorized').then((authorized) => {
      this.fullscreenLoading = false;

      if (authorized) {
        router.push({ path: 'app' });
      } else {
        localStorage.removeItem('spotify_token');
      }
    });
  },
  computed: {
    ...mapGetters({
      authorized: '$_login/authorized',
      token: '$_login/token',
    }),
  },
  methods: {
    doAuthorization() {
      this.fullscreenLoading = true;
      this.$store.dispatch('$_login/authorize');
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-auth-spotify {
  border: 0;
  background: none;
  cursor: pointer;
}
</style>
