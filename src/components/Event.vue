<template>
  <div id="event" class="event-container">
    <div class="bg-img w-100">
      <div>
        <div class="title-bg font-dancing-script my-3 pt-4">Sự kiện cưới</div>
        <div class="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit</div>
      </div>
      <div class="event-box-out">
        <div class="event-box m-auto">
          <div class="row gx-4">
            <div class="col-md-6 col-lg-3">
              <event-form-vue
                title="Lễ cưới nhà gái"
                time="07:30 AM 25/06/2023"
                location="Tư gia nhà gái"
                :img="imgs[0]"
              ></event-form-vue>
            </div>
            <div class="col-md-6 col-lg-3">
              <event-form-vue
                title="Lễ cưới nhà gái"
                time="07:30 AM 25/06/2023"
                location="Tư gia nhà gái"
                :img="imgs[1]"
              ></event-form-vue>
            </div>
            <div class="col-md-6 col-lg-3">
              <event-form-vue
                title="Lễ cưới nhà gái"
                time="07:30 AM 25/06/2023"
                location="Tư gia nhà gái"
                :img="imgs[2]"
              ></event-form-vue>
            </div>
            <div class="col-md-6 col-lg-3">
              <event-form-vue
                title="Lễ cưới nhà gái"
                time="07:30 AM 25/06/2023"
                location="Tư gia nhà gái"
                :img="imgs[3]"
              ></event-form-vue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventFormVue from './Event/EventForm.vue'
import img1 from '../assets/images/event/1.jpeg'
import img2 from '../assets/images/event/2.jpeg'
import img3 from '../assets/images/event/3.jpeg'
import img4 from '../assets/images/event/4.jpeg'
export default {
  name: 'ToanNgocWeddingEvent',
  components: {
    'event-form-vue': EventFormVue
  },

  data () {
    return {
      imgs: []
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
  margin-top: 80px;
}
.bg-img {
  background-image: url("../assets/images/bg/bgkit.jpeg");
  height: 500px;
  background-position: center;
  background-size: cover;
  position: relative;
}
.event-box {
  /* height: 600px; */
  width: 90%;
}
.event-box-out {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.title-bg {
  color: white;
}
</style>
