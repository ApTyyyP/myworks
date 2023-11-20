<template>
  <div
    class="card mb-3 mx-auto border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0"
    style="max-width: 700px"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <a :href="itemData.link" class="p-2" target="_blank">
          <div class="image-container">
            <img
              :src="itemData.imgSrc"
              alt="product"
              class="img-thumbnail border-0"
            />
          </div>
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <a :href="itemData.link" class="text-decoration-none" target="_blank">
            <div class="card-title fs-4">{{ itemData.title }}</div>
          </a>
          <p class="card-text">
            Ваша економія:
            <span class="text-danger">{{ itemData.discount }} &#8372;</span>
          </p>
          <h4 class="text-black-50">
            <del>{{ itemData.oldPrice }} &#8372;</del>
          </h4>
          <div class="price-container">
            <h1 class="text-danger">{{ itemData.price }} &#8372;</h1>
            <button type="button" class="btn btn-success px-4">Купити</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
