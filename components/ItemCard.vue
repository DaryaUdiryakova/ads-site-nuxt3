<script>
export default {
  props: ["product"],
  data() {
    return {
      isHover: false,
      isActive: false,
    };
  },
  methods: {
    showWindow(prod) {
      this.$emit("showWindow", prod);
    },
    addLikeProducts(id) {
      this.isActive = !this.isActive;
      this.$emit("addLikeProducts", id);
    },
  },
};
</script>

<template>
  <div class="wrap-card">
    <div
      class="card"
      @click="showWindow(product)"
    >
      <div class="row g-0">
        <div class="col-4 col-sm-3 img-box">
          <vue-hover-slider
            :slides="product.image"
            :height="220"
            :max-slides-to-show="3"
          >
            <template #more="{ count }">
              ещё {{ count }} фото
            </template>
          </vue-hover-slider>
        </div>
        <div class="col-8 col-sm-7">
          <div class="card-body">
            <h5 class="card-title text-primary">{{product.title}}</h5>
            <p class="card-price fw-bold">{{formatPrice(product.price)}}</p>
            <p class="card-address text-secondary">{{product.address}}</p>
            <p class="card-date text-secondary">{{product.date}}</p>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-heart "
      :class="{ btnHeartFillHover: isHover, btnHeartFillActive: isActive}"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      @click="addLikeProducts(product.id)"
    > </button>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  margin-left: 30px;
}
.wrap-card {
  position: relative;
  .card {
    margin: 20px 0;
    border: 0;
    cursor: pointer;
    .img-box {
      position: relative;
      overflow: hidden;
      width: 260px;
      height: 220px;
    }
    .card-title {
      font-size: 25px;
    }
    .card-price {
      font-size: 28px;
      margin-bottom: 25px;
    }
    .card-address {
      font-size: 20px;
      margin-bottom: 10px;
      &:before {
        content: url("../assets/geo-alt.svg");
        margin-right: 6px;
      }
    }
    .card-date {
      font-size: 15px;
    }
  }
  .btn-heart {
    position: absolute;
    z-index: 100;
    width: 25px;
    height: 25px;
    top: 15px;
    right: 15px;
    background-image: url("../assets/heart.svg");
    background-repeat: no-repeat;
    background-size: contain;
    color: #b6b7cf;
  }
  .btnHeartFillHover,
  .btnHeartFillActive {
    background-image: url("../assets/heart-fill.svg");
  }
}
</style>
