<template>
  <div class="home-container">
<!--    <div ref="boxcircles" class="box-loading"></div>-->
    <loading-custom :loading="getLoading"></loading-custom>
    <div class="header-vue">
      <header-vue></header-vue>
      <navbar-vue
        @sendMoney="sendMoney"
      ></navbar-vue>
<!--    <slide-show></slide-show>-->
      <div class="banner-custom" style="min-width: 100vw; min-height: 500px">
<!--        <img class="w-100 img-banner" style="max-height: 500px; object-fit: cover" src="../../public/static/imgs/new/1.jpg">-->
      </div>
    </div>
<!--    <div style="width: 100%; height: 65vh;" class="banner-custom"></div>-->
<!--    <banner-vue></banner-vue>-->
<!--    <card-slider></card-slider>-->
    <calendar-vue></calendar-vue>
    <bride-and-groom-vue></bride-and-groom-vue>
    <image-album></image-album>
<!--    <event-vue></event-vue>-->
    <wish-vue></wish-vue>
    <footer-vue></footer-vue>
    <confirm-vue></confirm-vue>
    <send-money></send-money>
  </div>
</template>

<script>
import HeaderVue from '@/components/HeaderJustMarried/Header.vue'
import NavbarCustomVue from '@/components/HeaderJustMarried/NavbarCustom.vue'
// import BannerHeaderVue from '@/components/AlbumBanner/BannerHeader.vue'
import CalendarVue from '@/components/Calendar/Calendar.vue'
import BrideAndGroomVue from '@/components/BandG/BrideAndGroom.vue'
// import EventVue from '@/components/Event/Event.vue'
import ImageAlbum from '@/components/Album/ImageAlbum.vue'
import WishVue from '@/components/Wish/Wish.vue'
import FooterVue from '@/components/Common/Footer'
import Confirm from '@/components/Common/Confirm'
import SendMoney from '@/components/Modal/SendMoney'
import LoadingCustom from '@/components/Common/LoadingCustom'
import actionTypes from '@/store/types/actionTypes'
// import SlideShow from '@/components/AlbumBanner/SlideShow'
// import CardSlider from '@/components/AlbumBanner/CardSlider'

export default {
  name: 'HomeView',
  components: {
    // CardSlider,
    LoadingCustom,
    SendMoney,
    'header-vue': HeaderVue,
    'navbar-vue': NavbarCustomVue,
    // 'banner-vue': BannerHeaderVue,
    'calendar-vue': CalendarVue,
    'bride-and-groom-vue': BrideAndGroomVue,
    // 'event-vue': EventVue,
    'image-album': ImageAlbum,
    'wish-vue': WishVue,
    'footer-vue': FooterVue,
    'confirm-vue': Confirm
  },
  data: function () {
    return {
      hasOpenLoading: false,
    }
  },
  mounted: function () {
    this.addEventScrollAnimation()
    this.offLoading()
  },
  computed: {
    getLoading () {
      return this.$store.getters.getLoading
    }
  },
  updated () {
    this.openLoading()
  },
  methods: {
    offLoading: function () {
      const vm = this
      setTimeout(() => {
        vm.$store.dispatch(actionTypes.LOADING, false)
      }, 800)
    },
    sendMoney: function () {
      let modal = document.getElementById("sendModal")
      modal.style.display = 'block'
    },
    addEventScrollAnimation: function () {
      const boxes = document.querySelectorAll(".animation-box")
      const boxes1 = document.querySelectorAll(".animation-up")
      if (this.$route.fullPath === '' || this.$route.fullPath === '') return
      window.addEventListener("scroll", (e) => {
        let menuBar = document.getElementById("menu-bar-fixed")
        if (menuBar != null) {
          if (window.scrollY > 300) {
            menuBar.classList.add('menu-position')
            menuBar.classList.remove('d-none')
          } else {
            menuBar.classList.add('d-none')
            menuBar.classList.remove('menu-position')
          }
        }
        const trigger = window.innerHeight / 5 * 4
        boxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top
          if (boxTop < trigger) {
            box.classList.add("animation-show")
          } else {
            box.classList.remove("animation-show")
          }
        })

        boxes1.forEach(box1 => {
          const boxTop = box1.getBoundingClientRect().top
          if (boxTop < trigger) {
            box1.classList.add("animation-show")
          } else {
            box1.classList.remove("animation-show")
          }
        })
      })
    },
    openLoading () {
      console.log("loggingg")
      const lazyloadImages = document.getElementsByClassName('lazy')
      let lazyloadThrottleTimeout
      function lazyload () {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout)
        }
        lazyloadThrottleTimeout = setTimeout(function () {
          const scrollTop = window.pageYOffset
          console.log(lazyloadImages)
          for (const img of lazyloadImages) {
            if (img.offsetTop < (window.innerHeight + scrollTop)) {
              console.log("layzee")
              img.src = img.dataset.src
              img.classList.remove('lazy')
            }
          }
          // lazyloadImages.forEach(function (img) {
          //   if (img.offsetTop < (window.innerHeight + scrollTop)) {
          //     img.src = img.dataset.src
          //     img.classList.remove('lazy')
          //   }
          // })
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
.banner-custom {
  background-image: url("../assets/images/banner/new/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 5%;
}

</style>
