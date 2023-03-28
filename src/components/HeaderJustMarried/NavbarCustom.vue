<template>
  <div class="d-flex justify-content-center border-bottom menu-font">
    <a href="#bandg" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="1500">Cặp đôi</div></a>
    <a href="#" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="1700">Chuyện tình yêu</div></a>
    <a href="#album" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="1900">Album ảnh</div></a>
    <a href="#event" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="2100">Sự kiện</div></a>
    <a href="#happy" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="2300">Lời chúc</div></a>
    <a href="#" class="px-3 py-2 c-pointer nav-item"><div data-aos="zoom-in-left" data-aos-duration="2500">Mừng cưới</div></a>
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
    }
  }
}
</script>

<style scoped>
.nav-item {
  transition: color ease .3s;
  font-weight: 500;
  text-decoration: none;
  color: #202a41;
}
.nav-item:hover {
  color: #c89d9c !important;
}
</style>
