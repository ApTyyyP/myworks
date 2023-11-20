<template>
  <products-list :products-list-data="notebooksList" />
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import { notebooksList } from './constants/3_data_notebooks';

export default {
  name: 'App',
  components: {
    ProductsList,
  },

  data() {
    return {
      notebooksList,
    };
  },
};
</script>

<style>
</style>
