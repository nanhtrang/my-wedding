<template>
  <div class="home">
    <div ref="boxcircles" class="box-loading"></div>
    <div class="header-vue">
      <header-vue></header-vue>
      <navbar-vue></navbar-vue>
    </div>
    <banner-vue></banner-vue>
    <calendar-vue></calendar-vue>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import NavbarCustomVue from '@/components/NavbarCustom.vue'
import BannerHeaderVue from '@/components/BannerHeader.vue'
import CalendarVue from '@/components/Calendar.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    'header-vue': HeaderVue,
    'navbar-vue': NavbarCustomVue,
    'banner-vue': BannerHeaderVue,
    'calendar-vue': CalendarVue
  },
  data: function () {
    return {
      hasOpenLoading: false
    }
  },
  mounted: function () {
    // this.openLoading()
  },
  methods: {
    openLoading () {
      const loading = this.$vs.loading({
        type: 'scale',
        background: '#ffe6ff',
        color: '#202a41'
      })
      this.hasOpenLoading = true
      setTimeout(() => {
        loading.close()
        this.hasOpenLoading = false
      }, 1500)
    }
  }
}
</script>
