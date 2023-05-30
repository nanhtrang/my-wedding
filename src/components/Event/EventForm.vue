<template>
  <div :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="1000"
       :class="`col-sm-6 m-0 p-0 px-3 d-flex my-2 animation-box ${isLeft ? 'justify-content-end animation-box-secondary' : ''}`">
    <div class="event-form-container rounded">
      <div class="event-form-title" :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="1300">
        <slot></slot>
      </div>
      <div class="form-container1 pb-3">
        <img class="img lazy" :data-src="img" width="230" height="230" :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="1500" />
<!--        <div class="event-time" :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="1700">{{ time }}</div>-->
        <div class="event-location" :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="1900">{{ location }}</div>
        <button-82 @onClick="gotoMap()" :data-aos="`${isLeft ? 'fade-right' : 'fade-left'}`" data-aos-duration="2100">Xem bản đồ</button-82>
      </div>
    </div>
  </div>
</template>

<script>
import Button82 from '../Common/Button82.vue'
export default {
  components: { Button82 },
  name: 'ToanNgocWeddingEventForm',
  props: {
    isLeft: null,
    time: null,
    location: null,
    img: null,
    link: null
  },
  data () {
    return {}
  },

  mounted () {},

  methods: {
    gotoMap: function () {
      window.open(this.link)
    }
  }
}
</script>

<style scoped>
.event-form-container {
  background-image: url("../../assets/images/bg/bg.png");
  box-shadow: rgba(178, 201, 211, 0.18) 0px 4px 13.65px 7.35px;
  width: 70%;
}

@media (max-width: 999px) and (min-width: 576px) {
  .event-form-container {
    width: 95% !important;
  }
}

@media (max-width: 575px) {
  .event-form-container {
    width: 100% !important;
  }
}
.event-form-title {
  text-transform: uppercase;
  color: #c89d9c;
  font-size: 25px;
  padding: 15px;
  position: relative;
}

.event-form-title::before {
  content: "";
  position: absolute;
  width: 140px;
  height: 4px;
  background-color: #c89d9c;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
}
.img {
  object-fit: cover;
  margin: 20px 0 10px;
  width: 230px;
  height: 230px;
  max-width: 90%;
}
.img:nth-child(1) {
  object-position: 50% 20%;
}

/*.img:nth-child(2) {*/
/*  object-position: 50% 20%;*/
/*  transform: scale(1.6);*/
/*}*/
.event-time {
  font-family: "Comfortaa", cursive;
  font-weight: bold;
}

.event-location {
  color: #444;
  margin-block: 10px;
  font-size: 20px;
}

.form-container1 {
  overflow: hidden;
}
</style>
