<template>
  <div class="wish-content-container p-3 border-bottom" :id="`wish-${id}`">
<!--    <i class="fa-solid fa-x" @click="deleteThis(id)"></i>-->
    <div class="person-chat text-left font-weight-bold">{{name}}</div>
    <div class="content-chat text-left">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import actionTypes from '@/store/types/actionTypes'

export default {
  props: {
    name: null,
    id: null,
  },
  name: 'WishContent',
  methods: {
    deleteThis: function (id) {
      this.$store.dispatch(actionTypes.DELETE_WISH, {id}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.wish-content-container {
  position: relative;
}
.fa-x {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
