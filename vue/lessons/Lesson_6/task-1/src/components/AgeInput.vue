<template>
    <div class="container pt-5">
        <div class="d-flex justify-content-center text-black">
            <h3>Задача 1</h3>
        </div>

        <p>
            Розробити компонент для введення віку користувача <i>(з підтримкою <b>v-model</b>)</i>.
        </p>
        <ul>
            <li>
                При заданні модифікатора <b>check</b> не допускати введення некоректного віку
                <i> (вік не може бути більшим за 150) </i>.
            </li>
            <li>
                При заданні модифікатора <b>setColor</b> задавати фон
                <i>
                    (вік менше 10 — <span class="text-success text-bold">зелений</span>, від 10 до 21 —
                    <span class="text-yellow text-bold">жовтий</span>, інакше —
                    <span class="text-warning text-bold">оранжевий</span>) </i
                >.
            </li>
        </ul>

        <hr />

        <div class="d-flex justify-content-center">
            <div class="form-group">
                <label for="age-input">Введіть ваш вік</label>
                <div class="d-flex flex-row">
                    <input
                        type="number"
                        :disabled="isAllowInput"
                        :class="color"
                        class="form-control"
                        id="age-input"
                        v-model="ageValue"
                        min="0"
                    />
                    <button class="btn btn-secondary clear" @click="clearAge">Очистити</button>
                </div>
            </div>
        </div>
        <div v-for="(error, index) in errors" :key="index" class="text-danger text-center mt-2">{{ error }}</div>
    </div>
</template>

<script>
export default {
    name: 'AgeInput',
    data() {
        return {
            color: null,
            errors: [],
        }
    },

    computed: {
        isAllowInput() {
            return this.errors.length > 0
        },

        ageValue: {
            get() {
                return this.modelValue
            },

            set(newValue) {
                this.errors = []
                this.ageValidate(newValue)
                this.$emit('update:modelValue', newValue)
            },
        },
    },

    props: {
        modelValue: {
            type: Number,
            required: true,
        },

        modelModifiers: {
            default: () => ({}),
        },
    },

    methods: {
        clearAge() {
            this.$emit('update:modelValue', null)
            this.errors = []
            this.color = null
        },

        ageValidate(newValue) {
            if (this.modelModifiers.check) {
                if (newValue >= 150) {
                    this.errors.push('Вік не може бути більшим за 150!')
                }
            }

            if (this.modelModifiers.setColor) {
                if (newValue) {
                    if (newValue < 10) {
                        this.color = 'green'
                    } else if (newValue >= 10 && newValue <= 21) {
                        this.color = 'yellow'
                    } else {
                        this.color = 'orange'
                    }
                }
            }

            if (!this.errors) {
                this.$emit('update:modelValue', newValue)
            }
        },
    },
}
</script>
