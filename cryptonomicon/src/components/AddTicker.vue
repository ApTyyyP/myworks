<template>
    <section>
        <div class="flex">
            <div class="max-w-xs">
                <label for="wallet" class="block text-sm font-medium text-gray-700"
                >Тикер (<a href="https://www.cryptocompare.com/" style="color: blue; text-decoration: underline; font-weight: normal" target="_blank">пример тикеров</a>)</label
                >
                <div class="mt-1 relative rounded-md shadow-md">
                    <input
                            v-model="ticker"
                            @keydown.enter="add"
                            type="text"
                            name="wallet"
                            id="wallet"
                            class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                            placeholder="Например DOGE"
                    />
                </div>
<!--                <div class="text-sm text-red-600">Такой тикер уже добавлен</div>-->
            </div>
        </div>
        <add-button @click="add" type="button" :disabled="disabled" class="my-4" />
    </section>
</template>
<script>
    import AddButton from "./AddButton.vue";

    export default {
        components: {
            AddButton
        },

        props: {
            disabled: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        emits: { // генерируем события (во Vue 3)
            "add-ticker": value => typeof value === "string" && value.length > 0
        },

        data() {
            return { ticker: "", filteredTickers: "" }
        },

        methods: {
            add() {
                if (this.ticker.length === 0) {
                    return;
                }
                this.$emit('add-ticker', this.ticker);
                this.ticker = "";
            }
        }
    }
</script>