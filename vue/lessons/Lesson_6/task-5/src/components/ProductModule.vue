<template>
    <div class="product-block">
        <product-filter/>
        <product-list :products="filterProducts()"/>
    </div>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import {mapGetters, mapState} from "vuex";

export default {
    name: "ProductModule",
    components: {ProductList, ProductFilter},
    computed: {
        ...mapGetters(['getFilters', 'getProducts']),
        ...mapState(['filters']),
    },
    created() {
        this.$store.dispatch("setBrands");
        this.$store.dispatch("setProducts");
        this.$store.dispatch("setSuppliers");
    },
    methods: {
        filterProducts() {
            let products = [...this.getProducts];

            let filterBrandsName = [];
            let filterSuppliersName = [];

            this.getFilters.suppliers.forEach((item) => {
                if (!filterSuppliersName.includes(item.name)) {
                    if (item.name !== "Rozetka") {
                        filterSuppliersName.push("Other");
                    } else {
                        filterSuppliersName.push(item.name);
                    }
                }
            });

            this.getFilters.brands.forEach((item) => {
                if (!filterBrandsName.includes(item.name)) {
                    filterBrandsName.push(item.name);
                }
            });

            if (filterBrandsName.length || filterSuppliersName.length) {
                return products.filter((product) => {
                    if (filterSuppliersName.includes("Other") && product.supplier !== "Rozetka") {
                        console.log(filterSuppliersName);
                        return product;
                    }
                    if (filterSuppliersName.includes(product.supplier)) {
                        return product;
                    }
                    return filterBrandsName.includes(product.brand);
                })
            }

            return products;
        },
    },
    watch: {
        filters: {
            handler() {
                this.filterProducts();
            },
            deep: true
        }
    }
}
</script>
