<template>
  <div>
    <input id="img-file" type="file" @change="getBase64($event)">
    <div>
      <textarea style="width: 80%; height: 500px" v-model="data"></textarea>
    </div>
    <button @click="clickA()">button</button>
  </div>
</template>

<script>
export default {
  name: 'ConvertBase64',
  mounted () {
    console.log(process.env.VUE_APP_HOST)
  },
  data: function () {
    return {
      data: null,
      files: null
    }
  },
  methods: {
    getBase64: function (e) {
      const vm = this
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = function () {
        vm.data = reader.result
      }
    },
    clickA: function () {
      alert('sda')
    }
  }
}
</script>

<style scoped>

</style>
