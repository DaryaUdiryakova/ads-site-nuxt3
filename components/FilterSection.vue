<script>
export default {
  props: ["minPrice", "maxPrice"],
  data() {
    return {
      selectCategory: 0,
      categories: [
        { id: 1, category: "Недвижимость" },
        { id: 2, category: "Автомобили" },
        { id: 3, category: "Ноутбуки" },
      ],
      realty: {
        propertyType: [
          { id: 1, value: "home", name: "Дом" },
          { id: 2, value: "apartment", name: "Квартира" },
          { id: 3, value: "room", name: "Комната" },
        ],

        countRoom: [
          { id: 0, value: 0, name: "Любое" },
          { id: 1, value: 1, name: "1" },
          { id: 2, value: 2, name: "2" },
          { id: 3, value: 3, name: "3" },
          { id: 4, value: 4, name: "4" },
          { id: 5, value: 5, name: "5+" },
        ],
      },
      auto: {
        yearRelease: [
          { id: 1, year: 2012 },
          { id: 2, year: 2015 },
          { id: 3, year: 2016 },
          { id: 4, year: 2019 },
          { id: 5, year: 2020 },
          { id: 6, year: 2021 },
          { id: 7, year: 2022 },
        ],

        transmissionType: [
          { id: 0, value: 0, name: "Любая" },
          { id: 1, value: "mechanical", name: "Механика" },
          { id: 2, value: "automatic", name: "Автомат" },
        ],

        bodyTypeCheck: [
          { id: 1, value: "sedan", name: "Седан" },
          { id: 2, value: "estate", name: "Универсал" },
          { id: 3, value: "jeep", name: "Внедорожник" },
          { id: 4, value: "hatchback", name: "Хетчбек" },
        ],
      },
      notebook: {
        amountRam: [
          { id: 0, value: 0, name: "Любой" },
          { id: 1, value: "16", name: "16 Гб" },
          { id: 2, value: "32", name: "32 Гб" },
          { id: 3, value: "64", name: "64 Гб" },
        ],

        screenDiagonal: [
          { id: 0, value: 0, name: "Любая" },
          { id: 1, value: "13", name: "13" + '"' },
          { id: 2, value: "14", name: "14" + '"' },
          { id: 3, value: "15", name: "15" + '"' },
          { id: 4, value: "17", name: "17" + '"' },
        ],

        processorTypeCheck: [
          { id: 1, value: "i9", name: "Intel Core i9" },
          { id: 2, value: "i7", name: "Intel Core i7" },
          { id: 3, value: "i5", name: "Intel Core i8" },
        ],
      },
      filter: {
        selectYearRelease: 0,
        transmission: 0,
        bodyType: [],
        propertyTypeСheck: [],
        minSquareRooms: "",
        countRoomСheck: 0,
        ram: 0,
        diagonal: 0,
        processorType: [],
        minPriceContent: "",
        maxPriceContent: "",
      },
    };
  },

  watch: {
    selectCategory(newCategory) {
      this.$emit("filterCategory", newCategory);
      this.clear();
    },
  },

  methods: {
    showFiltered() {
      let filterNoReactive = { ...toRaw(this.filter) };

      if (filterNoReactive.minPriceContent == "") {
        filterNoReactive.minPriceContent = this.minPrice;
      }
      if (filterNoReactive.maxPriceContent == "") {
        filterNoReactive.maxPriceContent = this.maxPrice;
      }
      this.$emit("showFiltered", filterNoReactive);
    },
    clear() {
      this.filter = {
        selectYearRelease: 0,
        transmission: 0,
        bodyType: [],
        propertyTypeСheck: [],
        minSquareRooms: "",
        countRoomСheck: 0,
        ram: 0,
        diagonal: 0,
        processorType: [],
        minPriceContent: "",
        maxPriceContent: "",
      };
    },
    printPriceMinMax() {
      if (
        this.filter.minPriceContent == "" ||
        this.filter.maxPriceContent == ""
      ) {
        this.filter.minPriceContent = this.minPrice;
        this.filter.maxPriceContent = this.maxPrice;
      }
    },
  },
};
</script>
<template>
  <div class="filter-section">
    <h3 class="title-section">Фильтр</h3>
    <div class="col-12 mb-3">
      <label
        for="select-products"
        class="form-label"
      >Категория товаров</label>
      <select
        class="form-select"
        id="select-products"
        v-model="selectCategory"
      >
        <option value="0">Все</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{ category.category }}</option>
      </select>
    </div>
    <div class="col-12 mb-3">
      <label class="form-label"> Цена, &#8381;</label>
      <InputPrice
        v-model:minPriceTest="filter.minPriceContent"
        v-model:maxPriceTest="filter.maxPriceContent"
        :minPriceLimit="minPrice"
        :maxPriceLimit="maxPrice"
        @printPriceMinMax="printPriceMinMax"
      />
    </div>
    <div v-if="selectCategory === 1">
      <fieldset class="col-12 mb-3">
        <legend class="col-form-label">Тип недвижимости</legend>
        <div>
          <div
            class="form-check"
            v-for="item in realty.propertyType"
            :key="item.id"
          >
            <input
              class="form-check-input"
              v-model="filter.propertyTypeСheck"
              type="checkbox"
              :value="item.value"
              :id="item.value + 'Type'"
            >
            <label
              class="form-check-label"
              :for="item.value + 'Type'"
            >
              {{item.name}}
            </label>
          </div>

        </div>
      </fieldset>
      <div class="col-12 mb-3">
        <label class="form-label">Минимальная площадь, м<sup>2</sup></label>
        <input
          class="form-control"
          type="text"
          placeholder="0"
          v-model.number="filter.minSquareRooms"
        >
      </div>
      <fieldset class="col-12 mb-3">
        <legend class="col-form-label">Количество комнат</legend>
        <div
          class="btn-group"
          role="group"
        >
          <template
            v-for="item in realty.countRoom"
            :key="item.id"
          >
            <input
              type="radio"
              class="btn-check"
              name="countRoom"
              :value="item.value"
              :id="'countRoom' + item.id"
              autocomplete="off"
              v-model="filter.countRoomСheck"
            >
            <label
              class="btn btn-outline-primary"
              :for="'countRoom' + item.id"
            > {{item.name}} </label>
          </template>
        </div>
      </fieldset>

    </div>
    <div v-else-if="selectCategory === 2">
      <div class="col-12 mb-3">
        <label
          for="select-year-release"
          class="form-label"
        > Год выпуска </label>
        <select
          class="form-select"
          id="select-year-release"
          v-model="filter.selectYearRelease"
        >
          <option value="0">Любой</option>
          <option
            v-for="item in auto.yearRelease"
            :key="item.id"
            :value="item.year"
          > {{item.year}} </option>
        </select>
      </div>
      <fieldset class="col-12 mb-3">
        <legend class="col-form-label"> Коробка передач</legend>
        <div
          class="btn-group"
          role="group"
        >
          <template
            v-for="item in auto.transmissionType"
            :key="item.id"
          >
            <input
              type="radio"
              class="btn-check"
              name="transmission"
              :id="'transmission' + item.id"
              autocomplete="off"
              :value="item.value"
              v-model="filter.transmission"
            >
            <label
              class="btn btn-outline-primary"
              :for="'transmission' + item.id"
            > {{item.name}} </label>
          </template>
        </div>
      </fieldset>
      <fieldset class="col-12 mb-3">
        <legend class="col-form-label"> Тип кузова</legend>
        <div>
          <div
            class="form-check"
            v-for="item in auto.bodyTypeCheck"
            :key="item.id"
          >
            <input
              class="form-check-input"
              v-model="filter.bodyType"
              type="checkbox"
              :value="item.value"
              :id="item.value + 'Type'"
            >
            <label
              class="form-check-label"
              :for="item.value + 'Type'"
            >
              {{item.name}}
            </label>
          </div>
        </div>
      </fieldset>
    </div>

    <div v-else-if="selectCategory === 3">
      <fieldset class="col-12 mb-3">
        <legend class="col-form-label"> Объем оперативной памяти (ГБ)</legend>
        <div
          class="btn-group"
          role="group"
        >
          <template
            v-for="item in notebook.amountRam"
            :key="item.id"
          >
            <input
              type="radio"
              class="btn-check"
              name="ram"
              :value="item.value"
              v-model="filter.ram"
              :id="'ram' + item.id"
              autocomplete="off"
            >
            <label
              class="btn btn-outline-primary"
              :for="'ram' + item.id"
            > {{item.name}} </label>
          </template>
        </div>
      </fieldset>

      <fieldset class="col-12 mb-3">
        <legend class="col-form-label"> Диагональ экрана (дюйм)</legend>
        <div
          class="btn-group"
          role="group"
        >
          <template
            v-for="item in notebook.screenDiagonal"
            :key="item.id"
          >
            <input
              type="radio"
              class="btn-check"
              name="diagonal"
              :id="'diagonal' + item.id"
              autocomplete="off"
              :value="item.value"
              v-model="filter.diagonal"
            >
            <label
              class="btn btn-outline-primary"
              :for="'diagonal' + item.id"
            > {{item.name}} </label>
          </template>
        </div>
      </fieldset>

      <fieldset class="col-12 mb-3">
        <legend class="col-form-label">Тип процессора</legend>
        <div>
          <div
            class="form-check"
            v-for="item in notebook.processorTypeCheck"
            :key="item.id"
          >
            <input
              class="form-check-input"
              v-model="filter.processorType"
              type="checkbox"
              :value="item.value"
              :id="'processor'+ item.id"
            >
            <label
              class="form-check-label"
              :for="'processor'+ item.id"
            >
              {{item.name}}
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    <div v-else>
      <div class="col-12 mb-3">
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary btn-lg filter-section__btn-show"
      @click="showFiltered"
    >Показать</button>
  </div>

</template>


<style lang="scss" scoped>
.filter-section {
  min-height: 100vh;
  .btn-group {
    width: 100%;
  }

  .filter-section__btn-show {
    margin-top: 15px;
  }
}
</style>


