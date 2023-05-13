<template>
  <div id="happy">
    <header-title
      title="Sổ lưu bút"
      subTitle="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!"
    ></header-title>
    <div class="container row m-auto">
      <div class="col-lg-6 mt-2">
        <wish-left @updateList="updateList"></wish-left>
      </div>
      <div class="col-lg-6 mt-2">
        <wish-right :data="getUpdateList"></wish-right>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../Common/HeaderTitle.vue'
import WishLeft from '@/components/Wish/WishLeft'
import WishRight from '@/components/Wish/WishRight'
import actionTypes from '@/store/types/actionTypes'
export default {
  components: { HeaderTitle,
    'wish-left': WishLeft,
    WishRight
  },
  name: 'ToanNgocWeddingWish',
  data () {
    return {
      wishList: []
    }
  },

  mounted () {
    this.getWish()
  },

  methods: {
    getWish: function () {
      const vm = this
      vm.$store.dispatch(actionTypes.GET_WISH).then(res => {
        vm.wishList = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    updateList: function (res) {
      this.wishList = Object.assign([],res)
      document.getElementById('wish-0').scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  computed: {
    getUpdateList () {
      return this.$store.getters.getWishList
    }
  }
}
</script>

<style scoped>

</style>
