<template>
  <div class="footer-container">
    <div class="row w-75 animation-up">
      <div v-if="imgs[0]" class="col-sm-6 ">
        <img :data-src="imgs[0].path" class="lazy img">
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-6">
        <div class="thank font-dancing-script animation-box animation-box-secondary">Thank</div>
        <div class="you font-dancing-script animation-box" @click="changeRouter">&nbsp;you!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data: function () {
    return {
      imgs: []
    }
  },
  mounted () {
    this.loadImg(require.context('../../assets/images/thanks', true, /\.jpeg/))
  },
  methods: {
    loadImg: function (r) {
      const vm = this
      r.keys().forEach(key => {
        const item = { path: r(key), name: key.replace('./', '') }
        vm.imgs.push(item)
      })
    },
    changeRouter: function () {
      this.$router.push('/my-admin')
    }
  }
}
</script>

<style scoped>
.footer-container {
  min-height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 80px; */
}
.img {
  width: 100%;
  transform: translateY(50px);
  -webkit-mask-image: url('../../assets/images/footer/mask.png');
  -webkit-mask-size: 140%;
  -webkit-mask-position: 50% 10%;
  -webkit-mask-repeat: no-repeat;
}
.font-dancing-script {
  font-size: 72px;
}
</style>
