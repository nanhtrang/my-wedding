<template>
  <div class="container-bandg container px-5" id="bandg">
    <header-title
      title="Cô dâu & Chú rể"
      subTitle="Mong một ngày, anh là chủ rể, em là cô dâu"
    ></header-title>
    <div class="row">
      <div class="col-sm-12 col-md-6 bg-bg  animation-box animation-box-secondary">
        <img id="groom-img"  :data-src="mainChar && mainChar[0] ? mainChar[0].path : null" class="w-100 h-100 lazy ">
        <div class="middle">
          <div class="text">Đức Toàn</div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 bg-bg  animation-box">
        <img id="bride-img" :data-src="mainChar && mainChar[1] ? mainChar[1].path : null" class="w-100 h-100 lazy ">
        <div class="middle">
          <div class="text">Như Ngọc</div>
        </div>
      </div>
    </div>
<!--    <div class="row">-->
<!--      <div class="col-sm-12 col-md-6 m-0 p-0 bg-bg bg-bg-1 animation-box animation-box-secondary">-->
<!--        <img id="groom-img" :data-src="mainChar && mainChar[0] ? mainChar[0].path : null" class="w-100 h-100 lazy">-->
<!--      </div>-->
<!--      <div class="col-sm-12 col-md-6 m-0 p-0 animation-box ">-->
<!--        <div class="box-info p-5 h-100" data-aos="fade-left" data-aos-duration="1300">-->
<!--          <div class="name-info font-dancing-script">Đức Toàn</div>-->
<!--          <div>-->
<!--            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus saepe soluta libero labore sed, porro ipsa. Facilis tempore expedita veritatis at quo nemo aliquid culpa odio. At, pariatur ullam.-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-sm-12 col-md-6 border-top m-0 p-0 animation-box animation-box-secondary" data-aos="fade-right" data-aos-duration="1300">-->
<!--        <div class="box-info p-5 h-100">-->
<!--          <div class="name-info font-dancing-script">Như Ngọc</div>-->
<!--          <div>-->
<!--            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus saepe soluta libero labore sed, porro ipsa. Facilis tempore expedita veritatis at quo nemo aliquid culpa odio. At, pariatur ullam.-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-sm-12 col-md-6 m-0 p-0 bg-bg bg-bg-2 animation-box" data-aos="fade-left" data-aos-duration="1300">-->
<!--        <img id="bride-img" :data-src="mainChar && mainChar[1] ? mainChar[1].path : null" class="w-100 h-100 lazy">-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import HeaderTitle from '../Common/HeaderTitle.vue'
export default {
  components: { HeaderTitle },
  name: 'ToanNgocWeddingBrideAndGroom',

  data () {
    return {
      mainChar: []
    }
  },

  mounted () {
    this.loadImg(require.context('../../assets/images/mainCharacter', true, /\.jpeg/))
  },

  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach(key => {
        const item = { path: r(key), name: key.replace('./', '') }
        vm.mainChar.push(item)
      })
    }
  }
}
</script>

<style scoped>
.name-info {
  font-size: 40px;
}
.box-info {
  background-color: #f9f9f9;
}
.bg-bg {
  /*background-color: #f2f4f0;*/
  min-height: 700px;
  /*background-size: cover;*/
  /*background-position: 0% 50%;*/
  position: relative;
}
.bg-bg img{
  max-height: 700px;
  object-fit: cover;
  border: none;
  transition: .5s ease;
  background-color: #f2eded;
}

.bg-bg:hover img {
  opacity: 0.5;
}

.bg-bg:hover .middle {
  opacity: 0.8;
}
.row {
  /*box-shadow: 0 15px 30px rgb(223, 223, 223);*/
}
.bg-bg-1 {
  /*background-image: url('../../assets/images/mainCharacter/1.jpeg');*/
}
.bg-bg-2 {
  /*background-image: url('../../assets/images/mainCharacter/2.jpeg');*/
}
#groom-img {
  object-position: 50% 40%;
  /*max-width: 110%;*/
}

#bride-img {
  object-position: 50% 10%;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.text {
  font-size: 30px;
  color: #ffffff;
  text-shadow: 0px 3px 1px #c76b87;
}
</style>
