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
    console.log(process.env.VUE_APP_HOST)
    this.openLoading()
  },
  methods: {
    openLoading () {
      document.addEventListener('DOMContentLoaded', function () {
        const lazyloadImages = document.querySelectorAll('img.lazy')
        let lazyloadThrottleTimeout
        function lazyload () {
          if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout)
          }

          lazyloadThrottleTimeout = setTimeout(function () {
            const scrollTop = window.pageYOffset
            lazyloadImages.forEach(function (img) {
              if (img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src
                img.classList.remove('lazy')
              }
            })
            if (lazyloadImages.length === 0) {
              document.removeEventListener('scroll', lazyload)
              window.removeEventListener('resize', lazyload)
              window.removeEventListener('orientationChange', lazyload)
            }
          }, 50)
        }

        document.addEventListener('scroll', lazyload)
        window.addEventListener('resize', lazyload)
        window.addEventListener('orientationChange', lazyload)
      })
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
