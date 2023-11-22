<template>
    <div id="product-card">
        <div class="product-card-image-block">
            <img class="product-card-image" :src="product.imgSrc" :alt="product.name">
        </div>
        <div class="product-card-name-block">
            {{product.name}}
        </div>
        <div class="product-card-price-block">
            {{product.price}} ₴
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
