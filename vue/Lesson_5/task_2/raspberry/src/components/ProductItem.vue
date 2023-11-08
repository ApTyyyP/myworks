<template>
  <div class="col">
    <div class="card bg-black p-2 h-100">
      <a :href="itemData.link" class="position-relative h-100">
        <img
          class="card-img-top rounded cart-image"
          :src="itemData.imgSrc"
          :alt="itemData.companyTitle"
        />
        <div class="label-container">
          <img class="label-image" src="@/assets/label.png" alt="label" />
        </div>
      </a>
      <div class="card-body">
        <div
          class="logo-container d-flex justify-content-between align-items-center mb-2"
        >
          <a :href="itemData.link" class="d-flex align-items-center text-light">
            <img :src="itemData.logo" alt="logo" class="logo-img" />
            <h5 class="card-title">{{ itemData.companyTitle }}</h5>
          </a>
          <div v-if="itemData.inStock" class="text text-success">
            В наявності
          </div>
          <div v-else class="text text-danger">Немає в наявності</div>
        </div>
        <div class="card-text text-white">{{ itemData.description }}</div>
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
a {
  text-decoration: none;
}

.card > a {
  overflow: hidden;
}

.card .cart-image {
  -webkit-transition: all 0.2s ease 0s;
  -o-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
}

.card:hover .cart-image {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.card:hover .card-title {
  text-decoration: underline;
}

.label-image img {
  width: 16px;
}

.label-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.7;
  background-color: black;
}

.logo-img {
  margin-right: 5px;
  height: 16px;
}

.cart-image {
  height: 100%;
  object-fit: cover;
}

.card-title {
  margin-bottom: 0;
}

.text {
  white-space: nowrap;
}
</style>
