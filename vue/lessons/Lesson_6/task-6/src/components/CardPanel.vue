<template>
  <div class="d-flex justify-content-center text-black mt-5">
    <h3>Task-6</h3>
  </div>

  <div class="d-flex justify-content-center mt-5" id="card">
    <div id="card-block">
      <img src="/images/card.png" alt="" />
      <input
        type="text"
        class="card-number"
        placeholder="5375 4141 0000 0000"
        maxlength="19"
        v-model="cardNumber"
        @keydown="onKeyDown"
      />
      <input
        type="text"
        class="card-date"
        placeholder="MM / DD"
        maxlength="5"
        v-model="cardDate"
        @keydown="onKeyDown"
      />
      <input
        type="text"
        class="card-code"
        placeholder="***"
        maxlength="3"
        v-model="cardCode"
        @keydown="onKeyDown"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPanel",
  data() {
    return {
      cardNumber: null,
      cardDate: null,
      cardCode: null,
    };
  },
  watch: {
    cardNumber(newValue, oldValue) {
      if (!oldValue || newValue.length > oldValue.length) {
        if (
          newValue.length === 4 ||
          newValue.length === 9 ||
          newValue.length === 14
        ) {
          this.cardNumber = newValue + " ";
        }
      } else {
        if (
          oldValue.length === 5 ||
          oldValue.length === 10 ||
          oldValue.length === 15
        ) {
          this.cardNumber = newValue.slice(0, -1);
        }
      }
    },
    cardDate(newValue, oldValue) {
      if (!oldValue || newValue.length > oldValue.length) {
        if (newValue.length === 2) {
          this.cardDate = newValue + "/";
        }
      } else {
        if (newValue.length === 2) {
          this.cardDate = newValue.slice(0, -1);
        }
      }
    },
  },
  methods: {
    onKeyDown(event) {
      const key = event.key;
      const isDigit = key >= "0" && key <= "9";
      const isBackspace = key === "Backspace";
      if (!isDigit && !isBackspace) event.preventDefault();
    },
  },
};
</script>
