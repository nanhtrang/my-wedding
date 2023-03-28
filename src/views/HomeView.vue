<template>
  <div class="home-container">
    <div ref="boxcircles" class="box-loading"></div>
    <div class="header-vue">
      <header-vue></header-vue>
      <navbar-vue></navbar-vue>
    </div>
    <banner-vue></banner-vue>
    <calendar-vue></calendar-vue>
    <bride-and-groom-vue></bride-and-groom-vue>
    <image-album></image-album>
    <event-vue></event-vue>
    <wish-vue></wish-vue>
  </div>
</template>

<script>
import HeaderVue from '@/components/HeaderJustMarried/Header.vue'
import NavbarCustomVue from '@/components/HeaderJustMarried/NavbarCustom.vue'
import BannerHeaderVue from '@/components/AlbumBanner/BannerHeader.vue'
import CalendarVue from '@/components/Calendar/Calendar.vue'
import BrideAndGroomVue from '@/components/BandG/BrideAndGroom.vue'
import EventVue from '@/components/Event/Event.vue'
import ImageAlbum from '@/components/Album/ImageAlbum.vue'
import WishVue from '@/components/Wish/Wish.vue'

export default {
  name: 'HomeView',
  components: {
    'header-vue': HeaderVue,
    'navbar-vue': NavbarCustomVue,
    'banner-vue': BannerHeaderVue,
    'calendar-vue': CalendarVue,
    'bride-and-groom-vue': BrideAndGroomVue,
    'event-vue': EventVue,
    'image-album': ImageAlbum,
    'wish-vue': WishVue
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
<style scoped>
.home-container {
  padding-bottom: 80px;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
