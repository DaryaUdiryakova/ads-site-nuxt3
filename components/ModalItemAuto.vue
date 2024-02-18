<script>
export default {
  props: ["product"],
};
</script>

<template>
  <div>
    <div class="row align-items-start">
      <div class="item-parameters text-year col">
        <p class="text-secondary fw-bold">Год выпуска</p>
        <p class="fw-bold">{{product.year}}</p>
      </div>
      <div class="item-parameters text-transmission col">
        <p class="text-secondary fw-bold"> Коробка передач</p>
        <p class="fw-bold">{{product.transmissionText}}</p>
      </div>
      <div class="item-parameters text-body-type col">
        <p class="text-secondary fw-bold">Тип кузова</p>
        <p class="fw-bold">{{product.typeText}}</p>
      </div>
    </div>
    <div class="item-parameters text-description">
      <p class="text-secondary fw-bold">Описание товара</p>
      <p>{{product.description}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

