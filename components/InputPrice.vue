<script>
export default {
  name: "InputPrice",
  props: ["minPriceTest", "maxPriceTest", "minPriceLimit", "maxPriceLimit"],
  data() {
    return {
      minPrice: "",
      maxPrice: "",
      minPricePlaceholder: "от " + 30000,
      maxPricePlaceholder: "до " + 22500000,
    };
  },
  methods: {
    printPriceMinMax() {
      this.$emit("printPriceMinMax");
    },
  },
};
</script>

<template>
  <div class='input-price'>
    <input
      id="customPriceMin"
      type="number"
      class="form-control input-item"
      :value="minPriceTest"
      :placeholder="'от ' + minPriceLimit"
      :min="minPriceLimit"
      :max="maxPriceLimit"
      step="1000"
      @input="$emit('update:minPriceTest', $event.target.value)"
      @focus="printPriceMinMax"
    >
    <input
      id="customPriceMax"
      type="number"
      class="form-control input-item"
      :value="maxPriceTest"
      :placeholder=" 'до ' + maxPriceLimit"
      :min="minPriceLimit"
      :max="maxPriceLimit"
      step="1000"
      @input="$emit('update:maxPriceTest', $event.target.value)"
      @focus="printPriceMinMax"
    >
  </div>
</template>

<style lang="scss" scoped>
.input-price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .input-item {
    width: 45%;
  }
}
</style>


