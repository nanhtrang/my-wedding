<template>
  <div
    data-aos-duration="1300" data-aos="flip-up"
    class="gallery js-flickity"
    data-flickity-options='{ "wrapAround": true }'
  >
    <div class="gallery-cell" ></div>
    <div class="gallery-cell" ></div>
    <div class="gallery-cell" ></div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingBannerHeader',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.gallery-cell:nth-child(1) {
  background-image: url('../../assets/images/banner/1.jpeg');
  background-position: 0 20%;
}

.gallery-cell:nth-child(2) {
  background-image: url('../../assets/images/banner/2.jpeg');
  background-position: 0 20%;
}

.gallery-cell:nth-child(3) {
  background-image: url('../../assets/images/banner/3.jpeg');
  background-position: 0 50%;
}

.gallery-cell {
  width: 66%;
  height: 500px;
  margin-right: 10px;
  background: #f5f6f8;
  counter-increment: gallery-cell;
  background-size: cover;
}

/* cell number */
.gallery-cell:before {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  content: "";
  line-height: 200px;
  font-size: 80px;
  color: white;
  height: 100%;
}
</style>
