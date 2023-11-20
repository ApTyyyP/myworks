<template>
    <ul class="list-unstyled pt-2">
        <li
            v-for="category in categoriesList"
            :key="category.id"
            class="text-dark d-inline-block p-2"
            @click="onSelectCategory(category.id)"
        >
            <a class="btn btn-outline-primary">{{ category.title }}</a>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ShopComponent',

    computed: {
        ...mapGetters(['categoriesList']),
    },

    created() {
        this.loadCategoriesList()
    },

    methods: {
        ...mapActions(['loadCategoriesList']),

        onSelectCategory(id) {
            this.$router.push({
                name: 'products',
                params: {
                    categoryId: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
