<template>
  <div class="box-wish box-chat animation-box" style="border-radius: 20px">
    <div class="container-form py-3">
      <wish-content v-for="(item, index) in data" :key="item.id" :index="index" :id="item.id"
        :name="item.name"
      >
        {{ item.wish }}
      </wish-content>
    </div>
  </div>
</template>

<script>
import WishContent from '@/components/Wish/WishContent'

export default {
  name: 'ToanNgocWeddingWishRight',
  components: {
    WishContent
  },
  props: {
    data: null
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');

input {
  caret-color: red;
}

.container-form {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  /*padding: 40px;*/
  box-sizing: border-box;
  background: #f9f9f9;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  overflow-y: auto;
}


.container-form::-webkit-scrollbar {
  width: 0px;
}

.inputs {
  text-align: left;
  margin-top: 30px;
}

label, input, button, textarea {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input, textarea {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
textarea {
  resize: none;
}

input {
  height: 50px;
}


a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
}

.wish-content-container:nth-child(even) {
  background-color: #f4eceb;
}
.wish-content-container:nth-child(odd) {
  background-color: #f9f9f9;
}
</style>
