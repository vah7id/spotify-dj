<template>
  <SearchBox :query="query" />
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import SearchBox from './_components/SearchBox';

export default {
  name: 'Search',
  components: {
    SearchBox,
  },
  computed: {
    ...mapGetters({
      tracks: '$_search/tracks',
    }),
  },
  created() {
    this.$store.registerModule('$_search', store);
  },
};
</script>
