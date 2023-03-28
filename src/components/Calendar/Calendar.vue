<template>
  <div class="calendar-container mt-5 pb-5">
    <div class="bg-side bg-left"></div>
    <div class="bg-side bg-right"></div>
    <header-title
      title="Thời gian"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta beatae libero similique eius neque aliquid magni dignissimos fugiat assumenda veritatis sit, quia hic sunt quas optio iure quod voluptatum?"
    ></header-title>
    <div class="container">
      <div class="row m-0 p-0">

        <div data-aos="fade-right" data-aos-duration="1000" class="col-md-6 col-sm-12">
          <div class="box-container h-100">
            <div class="box h-100">
              <h2 class="title my-2" data-aos="zoom-out" data-aos-duration="1400">Save the Date</h2>
              <div class="for-the-wedding my-1 mt-3">For the wedding of</div>
              <div class="font-dancing-script" data-aos="zoom-out" data-aos-duration="1600">
                Đức Toàn <span class="material-symbols-outlined icon-heart"> favorite </span> Như
                Ngọc
              </div>
              <div class="intro my-3" data-aos="zoom-out" data-aos-duration="1800">
                Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
                có thêm một niềm hạnh phúc!
              </div>
              <div data-aos="zoom-out" data-aos-duration="2000">
                <button-82 @onClick="send">Gửi lời chúc</button-82>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" class="col-md-6 col-sm-12">
          <div class="box-container">
            <div class="box">
              <calendar-detail></calendar-detail>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button82 from '../Common/Button82.vue'
import HeaderTitle from '../Common/HeaderTitle.vue'
import CalendarDetailVue from './CalendarDetail.vue'
export default {
  name: 'ToanNgocWeddingCalendar',
  components: {
    'calendar-detail': CalendarDetailVue,
    Button82,
    HeaderTitle
  },
  data () {
    return {}
  },

  mounted () {},

  methods: {
    send: function () {
      document.getElementById('happy').scrollIntoView()
    }
  }
}
</script>

<style scoped>
.box {
  border: 3px solid #c89d9c;
  padding: 20px;
}
.calendar-container {
  background-image: url("../../assets/images/bg/bg.png");
  position: relative;
}
.font-dancing-script {
  font-size: 35px !important;
}
.for-the-wedding {
  font-size: 20px;
  color: gray;
}
.col-sm-6 {
  padding: 30px 10px;
}
.box-container {
  background-color: #fff;
  padding: 40px 40px;
}
.title {
  font-family: 'Great Vibes', cursive;
  font-size: 40px;
  margin-bottom: 30px;
}
.icon-heart {
  color: #c89d9c !important;
  font-weight: 300;
}
.font-dancing-script {
  font-size: 30px;
}
.intro {
  padding: 20px 0px;
  font-size: 18px;
}

.bg-left {
  background-image: url("../../assets/images/bg/left-flower.png");
  min-height: 550px;
  min-width: 300px;
  top: 0;
}

.bg-right {
  background-image: url("../../assets/images/bg/right-flower.png");
  min-height: 620px;
  min-width: 500px;
  right: 0px;
  bottom: 0;
}

.bg-side {
  background-repeat: no-repeat;
  position: absolute;
  z-index: 10;
}

</style>
