<template>
  <div class="header-container p-5 border-bottom">
    <div class="font-dancing-script" data-aos="zoom-out" data-aos-duration="1000">
      Đức Toàn <span class="material-symbols-outlined icon-heart"> favorite </span> Như
      Ngọc
    </div>
    <div data-aos="zoom-out" data-aos-duration="1400">
      <span class="just-married">Just Married</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingHeader',
  data: function () {
    return {}
  },
  mounted: function () {},
  methods: {}
}
</script>

<style scoped>
.icon-heart {
  color: #c89d9c !important;
  font-weight: 300;
}
.font-dancing-script {
  font-size: 35px;
}
.header-container {
}

.just-married {
  letter-spacing: 3px;
  position: relative;
}

.just-married::before, .just-married::after {
  content: "";
  position: absolute;
  border-bottom: 1px solid #797979;
  width: 40px !important;
  height: 1px !important;
  bottom: 10px;
}

.just-married::before {
  left: -50px;
}

.just-married::after {
  right: -50px;
}
</style>
