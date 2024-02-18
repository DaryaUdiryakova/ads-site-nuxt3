<script>
export default {
  props: ["product"],
};
</script>

<template>
  <div>
    <div class="row align-items-start">
      <div class="item-parameters col">
        <p class="text-secondary fw-bold">Тип недвижимости</p>
        <p class="fw-bold">{{product.typeText}}</p>
      </div>
      <div class="item-parameters col">
        <p class="text-secondary fw-bold">Минимальная площадь, м</p>
        <p class="fw-bold">{{product.square}}</p>
      </div>
      <div class="item-parameters col">
        <p class="text-secondary fw-bold">Количество комнат</p>
        <p class="fw-bold">{{product.countRooms}}</p>
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

