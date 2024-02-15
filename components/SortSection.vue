<script>
export default {
  name: "SortSection",
  props: ["category"],
  data() {
    return {
      sortNameСheck: 0,
      sortName: [
        { id: 0, value: 0, name: "Популярные" },
        { id: 1, value: 1, name: "Дешёвые" },
        { id: 2, value: 2, name: "Новые" },
      ],
      isActive: false,
    };
  },

  watch: {
    sortNameСheck(newSort) {
      this.$emit("sortTest", newSort);
    },
    category() {
      this.sortNameСheck = 0;
    },
  },
  methods: {
    toggleLike() {
      this.isActive = !this.isActive;
      this.$emit("toggleLike");
    },
  },
};
</script>
<template>

  <div class="col-12 sort-section">

    <fieldset class="col-6">
      <legend class="col-form-label">Показать сначала:</legend>
      <div
        class="btn-group"
        role="group"
      >
        <template
          v-for="item in sortName"
          :key="item.id"
        >
          <input
            type="radio"
            class="btn-check"
            name="sortName"
            :value="item.value"
            :id="'sortName' + item.id"
            autocomplete="off"
            v-model="sortNameСheck"
          >
          <label
            class="
            btn
            btn-outline-primary"
            :for="'sortName' + item.id"
          > {{item.name}} </label>
        </template>
      </div>
    </fieldset>

    <button
      type="button"
      class="btn "
      @click="toggleLike"
      :class="[isActive ? 'btn-primary' : 'btn-outline-primary']"
    >Показать избранные</button>

  </div>
</template>

<style lang="scss" scoped>
.sort-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
}
</style>