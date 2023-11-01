<template>
  <div class="container bg-black mt-5">
    <div class="row">
      <product-item
        v-for="product in productsListData"
        :key="product.id"
        :item-data="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductsList',
  components: { ProductItem },

  props: {
    productsListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
