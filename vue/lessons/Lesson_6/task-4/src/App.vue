<template>
    <user-input v-model:userAge.checkAge="userAge" v-model:userName.isEmpty="userName"/>
</template>

<script>

import UserInput from "@/components/UserInput.vue";

export default {
  name: "App",
  data() {
    return {
        userAge: null,
        userName: null,
    }
  },
  components: {
      UserInput
  },
};
</script>

<style lang="scss">
    @import "@/assets/styles";
</style>
