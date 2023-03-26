<template>
  <div id="event" class="event-container">
    <div class="bg-img w-100">
      <div>
        <div class="title-bg font-dancing-script my-3 pt-4">Sự kiện cưới</div>
        <div class="text-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet
          consectetur adipisicing elit
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="event-form-container pt-3" style="margin-top: 50px">
            <div class="event-form-title">
              123
            </div>
            <div class="form-container1 pb-3">
              <img class="img" :src="imgs[0]" width="230" height="230">
              <div class="event-time">123</div>
              <div class="event-location">123123</div>
              <button class="button-82-pushable" role="button" @click="gotoMap">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Xem bản đồ
                </span>
              </button>
            </div>
          </div>
          <!-- <event-form-vue
            title="Lễ cưới nhà trai"
            time="07:30 AM 25/06/2023"
            location="Tư gia nhà trai"
            :img="imgs[0]"
            :link="map.boy"
          ></event-form-vue> -->
          <div class="event-form-container pt-3" style="margin-top: 50px">
            <div class="event-form-title">
              123
            </div>
            <div class="form-container1 pb-3">
              <img class="img" :src="imgs[0]" width="230" height="230">
              <div class="event-time">123</div>
              <div class="event-location">123123</div>
              <button class="button-82-pushable" role="button" @click="gotoMap">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Xem bản đồ
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <!-- <event-form-vue
            title="Tiệc cưới nhà trai"
            time="07:30 AM 25/06/2023"
            location="Tư gia nhà trai"
            :img="imgs[1]"
            :link="map.boy"
          ></event-form-vue> -->
          <div class="event-form-container pt-3" style="margin-top: 50px">
            <div class="event-form-title">
              123
            </div>
            <div class="form-container1 pb-3">
              <img class="img" :src="imgs[0]" width="230" height="230">
              <div class="event-time">123</div>
              <div class="event-location">123123</div>
              <button class="button-82-pushable" role="button" @click="gotoMap">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Xem bản đồ
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <!-- <event-form-vue
            title="Lễ cưới nhà gái"
            time="07:30 AM 25/06/2023"
            location="Tư gia nhà gái"
            :img="imgs[2]"
            :link="map.girl"
          ></event-form-vue> -->
          <div class="event-form-container pt-3" style="margin-top: 50px">
            <div class="event-form-title">
              123
            </div>
            <div class="form-container1 pb-3">
              <img class="img" :src="imgs[0]" width="230" height="230">
              <div class="event-time">123</div>
              <div class="event-location">123123</div>
              <button class="button-82-pushable" role="button" @click="gotoMap">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Xem bản đồ
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <!-- <event-form-vue
            title="Tiệc cưới nhà gái"
            time="07:30 AM 25/06/2023"
            location="Tư gia nhà gái"
            :img="imgs[3]"
            :link="map.girl"
          ></event-form-vue> -->
          <div class="event-form-container pt-3" style="margin-top: 50px">
            <div class="event-form-title">
              123
            </div>
            <div class="form-container1 pb-3">
              <img class="img" :src="imgs[0]" width="230" height="230">
              <div class="event-time">123</div>
              <div class="event-location">123123</div>
              <button class="button-82-pushable" role="button" @click="gotoMap">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Xem bản đồ
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="event-box-out">
        <div class="event-box m-auto">
          <div class="row gx-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import EventFormVue from './EventForm.vue'
import img1 from '../../assets/images/event/1.jpeg'
import img2 from '../../assets/images/event/2.jpeg'
import img3 from '../../assets/images/event/3.jpeg'
import img4 from '../../assets/images/event/4.jpeg'
export default {
  name: 'ToanNgocWeddingEvent',
  components: {
    // 'event-form-vue': EventFormVue
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
    this.loadImg()
  },

  methods: {
    loadImg: function () {
      this.imgs.push(img1)
      this.imgs.push(img2)
      this.imgs.push(img3)
      this.imgs.push(img4)
    }
  }
}
</script>

<style scoped>
.event-container {
  min-height: 100vh;
  background-color: #f2eded;
}
.bg-img {
  background-image: url("../../assets/images/bg/bgkit.jpeg");
  height: 500px;
  background-position: center;
  background-size: cover;
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
