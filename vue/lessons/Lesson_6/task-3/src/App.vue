<template>
  <domain-input v-model.check="domain" />
</template>

<script>
import DomainInput from "@/components/DomainInput.vue";

export default {
  name: "App",
  data() {
    return {
      domain: null,
    };
  },
  components: {
    DomainInput,
  },
};
</script>

<style lang="scss">
@import "assets/styles";
</style>
