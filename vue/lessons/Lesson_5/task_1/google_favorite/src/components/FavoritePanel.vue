<template>
  <div class="panel">
    <favorite-card
      v-for="card in cardsListData"
      :key="card.id"
      :card-data="card"
    />
  </div>
</template>

<script>
import FavoriteCard from './FavoriteCard.vue';

export default {
  name: 'FavoritePanel',

  components: { FavoriteCard },

  props: {
    cardsListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px 30px 20px;
  background-color: #353535;
}
.card:not(:last-child) {
  margin-right: 25px;
}
</style>
