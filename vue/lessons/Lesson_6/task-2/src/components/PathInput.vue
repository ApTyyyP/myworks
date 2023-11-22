<template>
    <div class="d-flex justify-content-center text-black mt-3">
        <h3>Task-2</h3>
    </div>

    <div class="d-flex justify-content-center">
        <div class="form-group mt-5 col-3">
            <label for="age-input">Введіть шлях до JS файла (<a href="#" @click="insertExamplePath">https://example.com/</a>)</label>
            <div class="d-flex flex-row">
                <input ref="pathFocus" type="text" class="form-control" id="age-input" v-model="ageValue" :class="color">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PathInput",
    data() {
        return {
            color: null,
        };
    },
    computed: {
        ageValue: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                if (this.modelModifiers.checkPath) {
                    let validate = this.ageValidate(newValue);

                    if (!validate) {
                        this.color = 'not-validate-url'
                    } else {
                        this.color = '';
                    }
                }

                this.$emit('update:modelValue', newValue)
            },
        },
    },
    mounted() {
        this.$refs.pathFocus.focus();
    },
    props: {
        modelValue: {
            type: String,
            required: true
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    methods: {
        ageValidate(newValue) {
            const regExp = /https?:\/\/[^\s/$.?#].[^\s]*\.js\b/i;
            return regExp.test(newValue);
        },
        insertExamplePath() {
            this.ageValue = 'https://example.com/'
        },
    }
}
</script>
