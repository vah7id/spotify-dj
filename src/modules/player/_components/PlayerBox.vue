<template>
  <aplayer class="player" float="true" autoplay
	  :music="playing"
	/>
</template>

<script>
import Aplayer from 'vue-aplayer';

export default {
  name: 'PlayerBox',
  props: ['currentTrack'],
  components: {
    Aplayer,
  },
  computed: {
    playing() {
      return this.currentTrack;
    },
  },
};
</script>

<style lang="scss" scoped>
.player{
	position: fixed;
	bottom:0;
	left:0;
	width:100%;
	border-top: 1px solid #eee;
}
</style>

