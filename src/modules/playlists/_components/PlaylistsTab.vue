<template>
  <el-row :gutter="24">
    <el-col :span="18" :offset="3">
      <el-tabs v-model="activeName" @tab-click="switchPly">
        <el-tab-pane label="PlayList A" name="PLY-A">
          <ul>
            <li v-for="track in playlistA">
              <Track :track="track" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="PlayList B" name="PLY-B">
          <ul>
            <li v-for="track in playlistB">
              <Track :track="track" />
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex';
import Track from './Track';
import * as constants from '../../../constants';

export default {
  name: 'PlaylistsTab',
  props: ['playlists'],
  data() {
    return {
      activeName: 'PLY-A',
    };
  },
  created() {
    this.$message({
      message: constants.WELCOME_MSG,
      type: 'success',
      duration: 2000,
    });
  },
  components: {
    Track,
  },
  computed: mapState({
    playlistA() {
      return this.playlists['PLY-A'];
    },
    playlistB() {
      return this.playlists['PLY-B'];
    },
  }),
  methods: {
    switchPly(tab) {
      this.$store.dispatch('$_playlists/switchPlaylist', tab.$el.id.split('pane-')[1]);
    },
  },
};
</script>

<style lang="scss" scoped>
ul{
  list-style:none;
  margin:0;
  padding:0 0 100px 0;
}
ul li{
  width:100%;
}
</style>

