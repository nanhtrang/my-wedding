<template>
  <div class="container-bandg container px-5">
    <header-title
      title="Cô dâu & Chú rể"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta beatae libero similique eius neque aliquid magni dignissimos fugiat assumenda veritatis sit, quia hic sunt quas optio iure quod voluptatum?"
    ></header-title>
    <div class="row">
      <div class="col-sm-6 m-0 p-0 bg-bg bg-bg-1"></div>
      <div class="col-sm-6 m-0 p-0">
        <div class="box-info p-5 h-100">
          <div class="name-info font-dancing-script">Đức Toàn</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus saepe soluta libero labore sed, porro ipsa. Facilis tempore expedita veritatis at quo nemo aliquid culpa odio. At, pariatur ullam.
          </div>
        </div>
      </div>
      <div class="col-sm-6 m-0 p-0">
        <div class="box-info p-5 h-100">
          <div class="name-info font-dancing-script">Như Ngọc</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus saepe soluta libero labore sed, porro ipsa. Facilis tempore expedita veritatis at quo nemo aliquid culpa odio. At, pariatur ullam.
          </div>
        </div>
      </div>
      <div class="col-sm-6 m-0 p-0 bg-bg bg-bg-2"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../Common/HeaderTitle.vue'
export default {
  components: { HeaderTitle },
  name: 'ToanNgocWeddingBrideAndGroom',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

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
  background-color: #f2f4f0;
  min-height: 420px;
  background-size: cover;
  background-position: 0% 50%;
}
.row {
  box-shadow: 0 15px 30px rgb(223, 223, 223);
}
.bg-bg-1 {
  background-image: url('../../assets/images/mainCharacter/1.jpeg');
}
.bg-bg-2 {
  background-image: url('../../assets/images/mainCharacter/2.jpeg');
}
</style>
