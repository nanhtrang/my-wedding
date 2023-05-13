<template>
  <div class="box-wish box-chat animation-box animation-box-secondary" style="border-radius: 20px">
    <div class="container-form">
      <div class="title-bg font-dancing-script">Gửi lời chúc</div>
      <div class="inputs">
        <label>Tên bạn</label>
        <input placeholder="Tên bạn" v-model="name" />
        <label>Lời chúc của bạn</label>
        <textarea placeholder="Lời chúc của bạn" rows="4" v-model="wish"></textarea>
        <button-82 class="mt-4" @onClick="sendWish">Gửi lời chúc</button-82>
      </div>
    </div>
  </div>
</template>

<script>
import Button82 from '@/components/Common/Button82'
import api from '@/common/api.js'
import actionTypes from '@/store/types/actionTypes'

export default {
  name: 'ToanNgocWeddingWishLeft',
  components: {
    Button82
  },


  data () {
    return {
      name: null,
      wish: null,
      data: []
    }
  },

  mounted () {

  },

  methods: {
    sendWish: function () {
      const vm = this
      const body = {
        name: this.name,
        wish: this.wish
      }
      this.$store.dispatch(actionTypes.ADD_WISH, body).then(res => {
        vm.$emit('updateList', res.data.list)
      })
    }
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
  padding: 40px;
  box-sizing: border-box;
  background: #f9f9f9;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
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
</style>
