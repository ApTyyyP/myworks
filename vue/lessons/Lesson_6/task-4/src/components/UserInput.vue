<template>
    <div class="d-flex justify-content-center text-black mt-5">
        <h3>Task-4</h3>
    </div>

    <div class="d-flex justify-content-center">
        <div class="form-group mt-5 col-1">
            <label for="age-input">Вік</label>
            <div class="d-flex flex-row">
                <input ref="ageFocus" type="number" class="form-control" id="age-input" v-model="ageValue" :class="colorAge">
            </div>
        </div>

        <div class="form-group mt-5 col-2 name-input">
            <label for="name-input">Ім'я</label>
            <div class="d-flex flex-row">
                <input ref="nameFocus" type="text" class="form-control" id="name-input" v-model="nameValue" :class="colorName">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInput",
    data() {
        return {
            colorAge: null,
            colorName: null,
        };
    },
    computed: {
        ageValue: {
            get() {
                return this.userAge;
            },
            set(newValue) {
                if (this.userAgeModifiers.checkAge) {
                    this.colorAge = ''

                    if (!newValue) {
                        this.colorAge = 'not-validate-field'
                    }
                    if (newValue < 18) {
                        this.colorAge = 'not-validate-field'
                    }

                    if (newValue >= 18) {
                        this.colorAge = 'validate-field-age'
                    }
                }

                this.$emit("update:userAge", newValue);
            }
        },
        nameValue: {
            get() {
                return this.userName;
            },
            set(newValue) {
                if (this.userNameModifiers.isEmpty) {
                    if (!newValue) {
                        this.colorName = 'not-validate-field'
                    } else {
                        this.colorName = ''
                    }
                }

                this.$emit("update:userName", newValue);
            }
        }
    },
    props: {
        userAge: {
            type: String,
            required: true
        },
        userAgeModifiers: {
            default: () => ({})
        },
        userName: {
            type: String,
            required: true
        },
        userNameModifiers: {
            default: () => ({})
        },
    }
}
</script>
