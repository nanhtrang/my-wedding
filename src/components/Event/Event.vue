<template>
  <div id="event" class="event-container border-bottom">
    <div class="bg-img w-100 animation-box animation-box-secondary"></div>
    <div class="row container m-auto m-0 p-0 info">
      <event-form
        :link="map.boy"
        :location="`Tại tư gia nhà trai`"
        :img="imgs[0] && imgs[0].path"
        :isLeft="true"
        >Nhà trai</event-form
      >
      <event-form
        :isLeft="false"
        :link="map.girl"
        :location="`Tại tư gia nhà gái`"
        :img="imgs[0] && imgs[1].path"
        >Nhà gái</event-form
      >
    </div>
  </div>
</template>

<script>
import EventForm from './EventForm.vue'

export default {
  name: 'ToanNgocWeddingEvent',
  components: {
    EventForm
  },

  data () {
    return {
      imgs: [],
      map: {
        boy: 'https://goo.gl/maps/1LQTvhBKNw88uasr8',
        girl: 'https://goo.gl/maps/LcsPddaKXyU4JsTs7'
      }
    }
  },

  mounted () {
    this.loadImg(require.context('../../assets/images/event', true, /\.jpg/))
  },

  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach((el) => {
        vm.imgs.push({ path: r(el) })
      })
    }
  }
}
</script>

<style scoped>
.event-container {
  min-height: 100vh;
  background-color: #e8cfcf;
  position: relative;
}
.bg-img {
  background-image: url("../../assets/images/bg/bgkit.jpeg");
  height: 500px;
  background-position: center;
  background-size: cover;
  position: absolute;
}
.event-box {
  /* width: 90%; */
}
.event-box-out {
  /* width: 100%; */
}
.title-bg {
  color: white;
}
.info {
  padding-top: 100px !important;
}
</style>
