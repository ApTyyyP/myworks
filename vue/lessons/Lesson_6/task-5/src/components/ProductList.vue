<template>
    <div class="product-list-block">
        <product-card v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
    name: "ProductList",
    components: {ProductCard},
    props: {
        products: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>
