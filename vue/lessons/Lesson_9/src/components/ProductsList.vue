<template>
    <div class="py-3">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div v-for="product in currentCategory.products" :key="product.id" class="col">
                <div class="card mb-3 mx-auto border-0 rounded-0 text-bg-light p-3 h-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <a :href="product.link" class="p-2" target="_blank">
                                <img :src="product.imgSrc" :alt="product.title" class="img-fluid rounded-start" />
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a :href="product.link" class="text-decoration-none" target="_blank">
                                    <div class="card-title fs-4">{{ product.title }}</div>
                                </a>
                                <div v-if="product.discount">
                                    Ваша економія:
                                    <span class="text-danger font-weight-bold">{{ product.discount }} &#8372;</span>
                                </div>
                                <div class="price-container">
                                    <h1 v-if="product.oldPrice" class="text-danger">{{ product.price }} &#8372;</h1>
                                    <h1 v-else class="text-black">{{ product.price }} &#8372;</h1>
                                </div>
                                <h4 v-if="product.oldPrice" class="text-black-50">
                                    <del>{{ product.oldPrice }} &#8372;</del>
                                </h4>
                                <a :href="product.link" class="btn btn-success float-end" target="_blank">Купити</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-dark m-2" @click="goBack">Назад</button>
                <button type="button" class="btn btn-outline-dark m-2" @click="goHome">На головну</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProductsList',

    data() {
        return {
            currentCategory: {},
        }
    },

    computed: {
        ...mapGetters(['getCategoryById']),

        currentCategoryId() {
            return this.$route.params.categoryId
        },
    },

    created() {
        this.currentCategory = this.getCategoryById(this.currentCategoryId)
    },

    methods: {
        goBack() {
            this.$router.push({
                name: 'shop',
            })
        },

        goHome() {
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
