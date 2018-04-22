<template>
  <el-card class="card-track" shadow="always">
    <img :src="image" />
    <p class="title">{{ track.name }} - {{ duration_ms }}</p>
    <input type="hidden" :value="track.preview_url" />
    <el-button v-on:click="removeTrack" type="danger" icon="el-icon-delete" circle></el-button>
    <el-button v-on:click="playTrack" icon="el-icon-caret-right" circle></el-button>
  </el-card>
</template>

<script>

export default {
  name: 'Track',
  props: ['track'],
  computed: {
    image() {
      const type = typeof this.track.images;
      return type !== 'undefined' ? this.track.images[0].url : this.track.album.images[0].url;
    },
    duration_ms() {
      let ms = this.track.duration_ms;
      ms = 1000 * Math.round(ms / 1000); // round to nearest second
      const date = new Date(ms);
      return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
    },
  },
  methods: {
    removeTrack() {
      this.$store.dispatch('$_playlists/removeTrack', this.track);
    },
    playTrack() {
      this.$store.dispatch('$_player/playTrack', this.track).then(() => {
        setTimeout(() => {
          document.getElementsByTagName('audio')[0].play();
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-track{
  padding: 0 30px 15px 30px;
  margin-bottom:15px;
}
.card-track button{
  margin-left:20px;
  float: right;
}
.title{
  float:left;
  max-width:60%;
  font-weight:bold;
  margin-top:10px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-track img{
  float:left;
  width: 40px;
  vertical-align: middle;
  border-radius: 4px;
  margin: 0 25px 0 -25px;
}
</style>

