<template>
  <div class="d-flex justify-content-center border-bottom menu-font">
    <div class="px-3 py-2 c-pointer nav-item">Cặp đôi</div>
    <div class="px-3 py-2 c-pointer nav-item">Chuyện tình yêu</div>
    <div class="px-3 py-2 c-pointer nav-item">Album ảnh</div>
    <div class="px-3 py-2 c-pointer nav-item">Sự kiện</div>
    <div class="px-3 py-2 c-pointer nav-item">Lời chúc</div>
    <div class="px-3 py-2 c-pointer nav-item">Mừng cưới</div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingNavbarCustom',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style scoped>
.nav-item {
  transition: color ease .3s;
  font-weight: 500;
}
.nav-item:hover {
  color: #c89d9c;
}
</style>
