<template>
  <el-row :gutter="24">
    <el-col :span="6" :offset="3">
      <h1><i class="el-icon-service" /> Spotify DJ</h1>
    </el-col>
    <el-col :span="12">
      <el-autocomplete
        v-model="query"
        prefix-icon="el-icon-search"
        value-key="name"
        class="search-box"
        :fetch-suggestions="querySearch"
        placeholder="Search & find your tracks..."
        @select="selectTrack"
      ></el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
import store from '../_store';

export default {
  name: 'SearchBox',
  data() {
    return {
      query: '',
      suggestions: [],
    };
  },
  created() {
    this.$store.registerModule('$_search', store);
    this.$store.registerModule('$_playlists', store);
  },
  methods: {
    selectTrack(track) {
      this.$store.dispatch('$_playlists/addTrack', track);
      this.$notify({
        title: 'Success',
        message: `${track.name} Added to active playlist`,
        type: 'success',
      });
    },
    querySearch(queryString, cb) {
      if (queryString.length > 2) {
        this.$store.dispatch('$_search/getTracks', queryString).then((tracks) => {
          this.suggestions = tracks;
          this.query = queryString;
          const tracksList = tracks[0].items.filter(item => item.name !== 'Undefined');
          tracksList.map((track, i) => {
            tracksList[i].name += ` - ${tracksList[i].artists[0].name} [+]`;
            return track;
          });
          cb(tracksList);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1 i{
  vertical-align:middle;
}
.search-box{
  margin-top: 23px;
  width:100%;
}
</style>