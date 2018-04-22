<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <el-alert
      v-if="status == 'error'"
      title="Oops !"
      type="error"
      :description="message"
      closable="false"
      show-icon>
    </el-alert>
  </div>
</template>

<script>

import store from '@/modules/login/_store';
import router from '../router';
import * as constants from '../constants';

export default {
  name: 'Authorized',
  data() {
    return {
      fullscreenLoading: true,
      code: null,
      status: 'pending',
      message: '',
    };
  },
  created() {
    const queryStrings = window.location.search;

    if (queryStrings.indexOf('code') > 0) {
      this.$store.registerModule('$_login', store);
      this.code = window.location.search.split('?code=');
      this.status = 'authorized';
      this.$store.dispatch('$_login/getAccessToken', this.code[1]).then(() => {
        this.fullscreenLoading = false;
        if (store.state.token != null) {
          localStorage.setItem('spotify_token', store.state.token);
          router.push({ path: '/app', query: { token: this.code[1] } });
        } else {
          this.status = 'error';
          this.message = constants.ACCESS_TOKEN_FAILED;
        }
      });
    } else {
      this.fullscreenLoading = false;
      this.status = 'error';
      this.message = constants.AUTHORIZE_FAILED;
    }
  },
};
</script>
