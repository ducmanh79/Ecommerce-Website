<template>
  <div id="main">
    <agile v-if="datas" ref="carousel" :options="myOption">
      <div class="slide" v-for="item in datas" :key="item">
        <img :src="item" alt="" class="slide-img" />
      </div>
    </agile>
  </div>
</template>

<script>

export default {
  data() {
    return {
      datas: [
        require("../../assets/slider/Banner-PC-macbook-air-DKT-2.jpg"),
        require("../../assets/slider/Banner-PC-shopdunk-care-3.jpg"),
        require("../../assets/slider/Banner-PC-vietinbank-new.jpg"),
        require("../../assets/slider/Banner-PC.png"),
        require("../../assets/slider/iPhone-13-FAMILY_Banner-PC.jpg"),
        require("../../assets/slider/macbook-air-M2PC.jpg"),
        require("../../assets/slider/vnpayWeb.jpg"),
      ],
      myOption: {
        autoplay: true,
        dost: true,
        navButtons: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            },
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: true,
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.slide-img {
  max-width: 100%;
}
.slide {
  touch-action: none;
}
</style>
