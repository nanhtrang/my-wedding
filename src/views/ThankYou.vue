<template>
  <div class="thank-you-page">
    <div class="row w-75">
      <div v-if="true" class="col-sm-6 ">
        <img src="../assets/images/thanks/thanks.jpeg" class="img">
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-6">
        <div class="thank font-dancing-script animation-fade-in-right">Thank</div>
        <div class="you font-dancing-script animation-fade-in-left">&nbsp;you!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYou'
}
</script>

<style scoped>
.thank-you-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100%;
  -webkit-mask-image: url('../assets/images/footer/mask.png');
  -webkit-mask-size: 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  z-index: 100;
}
.font-dancing-script {
  font-size: 72px;
}
</style>
