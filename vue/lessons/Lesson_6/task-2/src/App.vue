<template>
    <path-input v-model.checkPath="url"/>
</template>

<script>

import PathInput from "@/components/PathInput.vue";

export default {
  name: "App",
  data() {
    return {
      url: null
    }
  },
  components: {
      PathInput
  },
};
</script>

<style lang="scss">
@import "assets/styles";
</style>
