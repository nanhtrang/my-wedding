<template>
  <div class="h-100 w-100" style="min-height: 100vh; position: relative">
    <div class="box">
      <h3>Bạn là bạn của cô dâu hay chú rể?</h3>
      <toan-ngoc-wedding-button82 class="mx-2" @onClick="routerChange('/ngoc-toan')">Cô dâu</toan-ngoc-wedding-button82>
      <toan-ngoc-wedding-button82 class="mx-2" @onClick="routerChange('/toan-ngoc')">Chú rể</toan-ngoc-wedding-button82>
    </div>

  </div>
</template>

<script>
import ToanNgocWeddingButton82 from '@/components/Common/Button82'
export default {
  name: 'SideVue',
  components: { ToanNgocWeddingButton82 },
  methods: {
    routerChange: function (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
