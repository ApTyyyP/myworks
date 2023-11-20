<template>
  <products-list :products-list-data="raspberryList" />
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import { raspberryList } from './constants/2_data_raspberry';

export default {
  name: 'App',
  components: { ProductsList },

  data() {
    return {
      raspberryList,
    };
  },
};
</script>

<style>
#app {
  min-width: 320px;
}
</style>
