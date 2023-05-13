<template>
  <div>
    <div class="img-title mt-5  animation-box"></div>
    <div data-aos-duration="1000" class="title-bg font-dancing-script animation-box animation-box-secondary">
      {{title}}
    </div>
    <div data-aos-duration="1300" class="quote mb-5 mt-2 container animation-box">
      {{subTitle}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingHeaderTitle',
  props: {
    title: null,
    subTitle: null
  },
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

</style>
