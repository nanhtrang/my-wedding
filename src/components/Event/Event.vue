<template>
  <div id="event" class="event-container">
    <div class="bg-img w-100">
    </div>
    <div class="">
      <event-form></event-form>
      <event-form></event-form>
      <event-form></event-form>
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
        boy: 'https://www.google.com/maps/place/Thanh+L%E1%BB%8Bch/@20.4707379,106.4301141,17z/data=!4m6!3m5!1s0x3135fa19ba3228a9:0x3bf1c212989a3f2b!8m2!3d20.4695103!4d106.4307038!16s%2Fg%2F11gmxm1bl0?hl=vi-VN',
        girl: 'https://www.google.com/maps/@21.3576847,105.3089581,19.37z?hl=vi-VN'
      }
    }
  },

  mounted () {
    this.loadImg(require.context('../../assets/images/event', true, /\.jpeg/))
  },

  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach(el => {
        vm.imgs.push({ path: r(el) })
      })
    },
    gotoMap: function () {
      console.log(123)
    }
  }
}
</script>

<style scoped>
.event-container {
  min-height: 100vh;
  background-color: #f2eded;
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
</style>
