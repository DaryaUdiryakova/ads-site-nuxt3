<script>
export default {
  props: ["product"],
};
</script>

<template>
  <div>
    <div class="row align-items-start">
      <div class="item-parameters text-year col">
        <p class="text-secondary fw-bold">Оперативная память (ГБ)</p>
        <p class="fw-bold">{{product.ram}}</p>
      </div>
      <div class="item-parameters text-transmission col">
        <p class="text-secondary fw-bold"> Диагональ экрана (дюйм)</p>
        <p class="fw-bold">{{product.diagonal}}</p>
      </div>
      <div class="item-parameters text-body-type col">
        <p class="text-secondary fw-bold">Тип процессора</p>
        <p class="fw-bold">{{product.type}}</p>
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

