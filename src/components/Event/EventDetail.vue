<template>
  <div class="">
    <div class="event-form-title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToanNgocWeddingEventDetail',
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
.event-form-title {
  text-transform: uppercase;
  color: #c89d9c;
  font-size: 25px;
  padding: 15px;
  position: relative;
}

.event-form-title::before {
  content: "";
  position: absolute;
  width: 140px;
  height: 4px;
  background-color: #c89d9c;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
}
</style>
