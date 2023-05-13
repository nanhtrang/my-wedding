<template>
  <div
    data-aos-duration="1300" data-aos="flip-up"
    class="gallery js-flickity animation-fade-in-left delay-12"
    data-flickity-options='{ "wrapAround": true }'
  >
    <div class="gallery-cell" v-for="(item, index) in imgs" :key="index">
      <img :src="item.path"
           :data-src="item.path">
    </div>
<!--    <div class="gallery-cell" ></div>-->
<!--    <div class="gallery-cell" ></div>-->
  </div>
</template>

<script>
import apiPath from '@/common/apiPath'
import http from '@/common/http'

export default {
  name: 'ToanNgocWeddingBannerHeader',

  data () {
    return {
      imgs: []
    }
  },

  mounted () {
    this.loadImg(require.context('../../assets/images/banner', true, /\.jpeg/))
  },

  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach(key => {
        const item = { path: r(key), name: key.replace('./', '') }
        vm.imgs.push(item)
      })
    }
  }
}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/*.gallery-cell:nth-child(1) {*/
/*  background-image: url('../../assets/images/banner/1.jpeg');*/
/*  background-position: 0 20%;*/
/*}*/

/*.gallery-cell:nth-child(2) {*/
/*  background-image: url('../../assets/images/banner/2.jpeg');*/
/*  background-position: 0 20%;*/
/*}*/

/*.gallery-cell:nth-child(3) {*/
/*  background-image: url('../../assets/images/banner/3.jpeg');*/
/*  background-position: 0 50%;*/
/*}*/

.gallery-cell img {
  object-fit: cover;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
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
