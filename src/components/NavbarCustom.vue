<template>
  <div class="d-flex justify-content-center border-bottom menu-font">
    <a href="#bandg" class="px-3 py-2 c-pointer nav-item">Cặp đôi</a>
    <a href="#" class="px-3 py-2 c-pointer nav-item">Chuyện tình yêu</a>
    <a href="#" class="px-3 py-2 c-pointer nav-item">Album ảnh</a>
    <a href="#event" class="px-3 py-2 c-pointer nav-item">Sự kiện</a>
    <a href="#" class="px-3 py-2 c-pointer nav-item">Lời chúc</a>
    <a href="#" class="px-3 py-2 c-pointer nav-item">Mừng cưới</a>
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
