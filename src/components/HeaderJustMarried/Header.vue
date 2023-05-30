<template>
  <div id="header-container" class="header-container py-5 px-3 border-bottom">
    <div class="font-dancing-script animation-fade-in-up delay-05">
      Đức Toàn <span class="material-symbols-outlined icon-heart"> favorite </span> Như
      Ngọc
    </div>
    <div class="animation-fade-in-up delay-06">
      <span class="just-married">Save The Date</span>
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
  transition: 0.5s all ease;
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
