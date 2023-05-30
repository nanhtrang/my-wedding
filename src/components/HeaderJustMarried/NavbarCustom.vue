<template>
  <div>
    <div id="menu-bar" class="d-flex justify-content-center border-bottom menu-font animation-fade-in-right delay-10" style="background-color: #e8cfcf">
      <a href="#calendar" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-10">Thời gian</div></a>
      <a href="#bandg" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-10">Cặp đôi</div></a>
      <a href="#album" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-12">Album ảnh</div></a>
<!--      <a href="#event" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-13">Sự kiện</div></a>-->
      <a href="#happy" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-14">Lời chúc</div></a>
      <a href="javascript:;" @click="sendMoney" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-15">Mừng cưới</div></a>
    </div>
    <div id="menu-bar-fixed" class="d-none">
      <div class="menu-bar-fixed-container d-flex justify-content-center border-bottom menu-font animation-fade-in-right delay-10" style="background-color: #e8cfcf">
        <div class="logo">
          <a href="#" style="text-decoration: none">
            <div class="font-dancing-script animation-fade-in-up delay-05 d-flex justify-content-center align-items-center text-secondary">
                T <span class="material-symbols-outlined icon-heart"> favorite </span> N
            </div>
          </a>
        </div>
        <a href="#calendar" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-10">Thời gian</div></a>
        <a href="#bandg" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-10">Cặp đôi</div></a>
        <a href="#album" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-12">Album ảnh</div></a>
<!--        <a href="#event" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-13">Sự kiện</div></a>-->
        <a href="#happy" @click="trigger" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-14">Lời chúc</div></a>
        <a href="javascript:;" @click="sendMoney" class="px-3 py-2 c-pointer nav-item"><div class="animation-fade-in-right delay-15">Mừng cưới</div></a>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ToanNgocWeddingNavbarCustom',

  data () {
    return {}
  },

  mounted () {},

  methods: {
    goto: function (id) {
      document.getElementById(id).scrollIntoView()
    },
    trigger: function () {
      // document.getElementById("header-container").style.marginTop = "66px"
    },
    sendMoney: function () {
      this.$emit('sendMoney')
    }
  }
}
</script>

<style scoped>
.nav-item {
  transition: all ease .3s;
  font-weight: 500;
  text-decoration: none;
  color: #202a41;
}
.nav-item:hover {
  color: #eae7e7 !important;
  background-color: #c76b87;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.logo {
  position: absolute;
  top: -3px;
  left: 50px;
  font-size: 30px;
}

@media (max-width: 800px) {
  .logo {
    display: none;
  }
}
</style>
