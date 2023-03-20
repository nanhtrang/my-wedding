<template>
  <div
    class="gallery js-flickity"
    data-flickity-options='{ "wrapAround": true }'
  >
    <div class="gallery-cell"></div>
    <div class="gallery-cell"></div>
    <div class="gallery-cell"></div>
    <div class="gallery-cell"></div>
    <div class="gallery-cell"></div>
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

.gallery-cell {
  width: 66%;
  height: 450px;
  margin-right: 10px;
  background: #f5f6f8;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
  height: 100%;
}
</style>
