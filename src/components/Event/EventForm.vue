<template>
  <div class="event-form-container pt-3">
    <div class="event-form-title">
      {{title}}
    </div>
    <div class="form-container1 pb-3">
      <img class="img" :src="img" width="230" height="230">
      <div class="event-time">{{time}}</div>
      <div class="event-location">{{location}}</div>
      <button class="button-82-pushable" role="button" @click="gotoMap">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">
          Xem bản đồ
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingEventForm',
  props: {
    title: null,
    time: null,
    location: null,
    img: null,
    link: null
  },
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    gotoMap: function () {
      window.open(this.link)
    }
  }
}
</script>

<style scoped>
.event-form-container {
  background-image: url('../../assets/images/bg/bg.png');
  box-shadow: rgba(178, 201, 211, 0.18) 0px 4px 13.65px 7.35px;
}
/* .event-form-title {
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
  margin: 20px 0 40px;
  width: 230px;
  height: 230px;
  max-width: 90%;
}
.img:nth-child(1) {
  object-position: 50;
}
.event-time {
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
}

.event-location {
  color: #444;
  margin-block: 10px;
  font-size: 20px;
} */
</style>
