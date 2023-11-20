<template>
  <div>
    <favorite-panel :cards-list-data="favoriteSources" />
  </div>
</template>

<script>
import FavoritePanel from './components/FavoritePanel.vue';
import { favoriteSources } from './constants/data_google_favorite';

export default {
  name: 'App',

  components: {
    FavoritePanel,
  },

  data() {
    return {
      favoriteSources,
    };
  },
};
</script>

<style lang="css" scoped></style>
