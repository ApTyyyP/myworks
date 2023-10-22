<template>
  <div class="card">
    <div class="img">
      <img :src="cardData.imgSrc" :alt="cardData.title" />
    </div>
    <div class="link-wrap">
      <a :href="cardData.link"> {{ cardData.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteCard',

  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
a {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.card {
  margin-bottom: 20px;
  padding: 10px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.2s ease 0s;
  -o-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
}
.card:hover {
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
}
.img {
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: #2a2a2a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.img img {
  max-width: 30px;
  width: 100%;
}
.link-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-wrap a {
  color: #fff;
  text-decoration: none;
}
.link-wrap a:hover {
  text-decoration: underline;
}
</style>
