<template>
  <div class="d-flex justify-content-center text-black mt-5">
    <h3>Task-3</h3>
  </div>

  <div class="d-flex justify-content-center">
    <div class="form-group mt-5 col-3">
      <label for="email-input">
        Введіть ліву частину email(<a href="#" @click="addDomainPart">
          @inv.mn.edu</a
        >)</label
      >
      <div class="d-flex flex-row">
        <input
          ref="emailFocus"
          type="text"
          class="form-control"
          id="email-input"
          v-model.lazy="emailValue"
          :class="color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DomainInput",
  data() {
    return {
      color: null,
    };
  },
  computed: {
    emailValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        if (this.modelModifiers.check) {
          if (!newValue.includes('@inv.mn.edu')) {
            this.color = "not-validate-email";
          } else {
            this.color = "";
          }
        }

        this.$emit("update:modelValue", newValue);
      },
    },
  },
  mounted() {
    this.$refs.emailFocus.focus();
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  methods: {
      addDomainPart() {
          let currentInput = this.emailValue
          if (!currentInput.includes('@') && !currentInput.includes('@inv.mn.edu')) {
              currentInput += '@inv.mn.edu';
          }
          this.emailValue = currentInput;
      }
  },
};
</script>
