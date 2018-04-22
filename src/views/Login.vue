<template>
  <div class="login-wrapper">
    <h1>Spotify DJ</h1>
    <p>Authorize your Spotify account!</p>
    <LoginBySpotify />
  </div>
</template>

<script>
import LoginBySpotify from '../modules/login';

export default {
  name: 'Home',
  components: {
    LoginBySpotify,
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  text-align: center;
  margin: 100px auto;
}
</style>
