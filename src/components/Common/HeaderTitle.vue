<template>
  <div>
    <div data-aos="flip-up" class="img-title mt-5"></div>
    <div data-aos="flip-up" data-aos-duration="1000" id="bandg" class="title-bg font-dancing-script">
      {{title}}
    </div>
    <div data-aos="flip-up" data-aos-duration="1300" class="quote mb-5 mt-2 container">
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
