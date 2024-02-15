<template>

  <span
    class="vue-hover-slider__controls"
    :class="isShowControls"
    :ref="setControls"
  >
    <span
      v-for="(image, index) in slides"
      :key="index"
      :data-key="index"
      class="vue-hover-slider__control"
      :class="{'vue-hover-slider__control--active': activeSlide === index}"
      @mouseout="firstImgIndex"
      @mouseover="showImgIndex(index)"
    >
      <span class="vue-hover-slider__control-mark"></span>
    </span>
  </span>

</template>

<script>
export default {
  name: "VueHoverSlidesControls",
  props: {
    slides: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      controls: [],
      activeSlideData: 0,
    };
  },
  computed: {
    activeSlide: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
    isShowControls() {
      return {
        "hide-controls": this.slides.length <= 1,
      };
    },
  },
  methods: {
    setControls(el) {
      this.controls.push(el);
    },
    showImgIndex(index) {
      this.$emit("imgIndex", index);
    },
    firstImgIndex() {
      this.$emit("firstImgIndex");
    },
  },
};
</script>