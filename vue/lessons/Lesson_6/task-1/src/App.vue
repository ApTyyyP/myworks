<template>
    <age-input v-model.check.setColor="age" />
</template>

<script>
import AgeInput from '@/components/AgeInput.vue'

export default {
    name: 'App',
    data() {
        return {
            age: null,
        }
    },

    components: {
        AgeInput,
    },
}
</script>

<style lang="scss">
@import './assets/index';
</style>
