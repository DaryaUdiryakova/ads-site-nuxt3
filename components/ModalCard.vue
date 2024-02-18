 <script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  props: ["product"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  methods: {
    closeModal(id) {
      this.$emit("closeModal", id);
    },
  },
};
</script>

<template>
  <div
    class="modal-detailed"
    :id="'modalCard' + product.id"
  >
    <div
      class="bg-window-dialog"
      @click="closeModal(product.id)"
    ></div>
    <div class="window-dialog">
      <div class="window-content">
        <div class="window-header">
          <div>
            <p class="modal-date text-secondary">{{product.date}}</p>
            <h5
              class="modal-title"
              id="modalCardLabel"
            >{{product.title}}</h5>
            <p class="modal-price fw-bold">{{formatPrice(product.price)}}</p>
          </div>
          <button
            type="button"
            class="btn-close"
            @click="closeModal(product.id)"
          >
          </button>
        </div>
        <div class="window-body">
          <div class="item-flex">
            <div class="photo-gallery">
              <vueper-slides
                ref="vueperslides1"
                :touchable="false"
                fade
                :autoplay="false"
                :lazy="true"
                :lazyLoadOnDrag="true"
                :bullets="false"
                @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                fixed-height="250px"
                :arrows="false"
              >
                <vueper-slide
                  v-for="(slide, i) in  product.image"
                  :key="i"
                  :image="slide"
                >
                </vueper-slide>
              </vueper-slides>
              <vueper-slides
                v-if="product.image.length>1"
                class="no-shadow thumbnails"
                ref="vueperslides2"
                @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                :visible-slides="product.image.length"
                fixed-height="75px"
                :bullets="false"
                :touchable="false"
                :gap="2.5"
                :arrows="false"
              >
                <vueper-slide
                  v-for="(slide, i) in product.image"
                  :key="i"
                  :image="slide"
                  @click="$refs.vueperslides2.goToSlide(i)"
                >
                </vueper-slide>
              </vueper-slides>
            </div>
            <div class="product-info">
              <div class="item-parameters text-name">
                <p class="text-secondary fw-bold">Продавец</p>
                <p>{{product.name}}<span class="badge bg-primary">{{product.rating}}</span> </p>
              </div>
              <div class="item-parameters text-address">
                <p class="text-secondary fw-bold">Адрес</p>
                <p>{{product.address}}</p>
              </div>
            </div>
          </div>
          <ModalItemRealty
            :product="product"
            v-if="product.component == 'ModalItemRealty'"
          />
          <ModalItemAuto
            :product="product"
            v-if="product.component == 'ModalItemAuto'"
          />
          <ModalItemLaptop
            :product="product"
            v-if="product.component == 'ModalItemLaptop'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-detailed {
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  top: 0;
  bottom: 0;
  z-index: 120;
  align-items: center;
  justify-content: center;
  .bg-window-dialog {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 115;
  }
  .window-dialog {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    background: #fff;
    width: 60%;
    z-index: 120;
    .window-content {
      .window-header {
        align-items: flex-start;
        border-bottom: 0;
        padding: 25px 25px 10px 25px;
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        .modal-date {
          font-size: 14px;
          margin-bottom: 10px;
        }
        .modal-title {
          font-size: 32px;
        }
        .modal-price {
          font-size: 25px;
          margin-bottom: 0;
        }
      }
      .window-body {
        padding: 0 25px 25px 25px;
        overflow-y: auto;
        height: 55vh;
        .item-flex {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          overflow-y: hidden;
          .photo-gallery {
            margin-bottom: 20px;
            .vueperslides {
              width: 400px;
              margin-top: 5px;
            }
            .vueperslides--fixed-height.vueperslides--bullets-outside {
              margin-bottom: 0;
            }
            .vueperslide,
            .vueperslide__image {
              background-position: 0 64%;
            }
          }
          .product-info {
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>

