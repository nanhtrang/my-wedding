<template>
  <div class="confirm-container py-2 animation-fade-in-up delay-06">
    <div class="row container m-auto" style="position: relative">
      <a class="goToTop" href="#">
        <i class="fa-solid fa-angles-up"></i>
      </a>
      <div class="d-flex align-items-center col-sm-4 justify-content-end animation-fade-in-up delay-10">
        Vui lòng xác nhận giúp vợ chồng mình để có một sự chuẩn bị tốt nhất nhé!!!</div>
      <div class="d-inline-flex align-items-center justify-content-start col-sm-5 animation-fade-in-up delay-12">
        <input placeholder="Họ và tên bạn" v-model="name"> &nbsp;
        <input placeholder="Bạn đi mấy người" v-model="number" maxlength="1">
      </div>
      <div class="col-sm-3 d-inline-flex mt-2 animation-fade-in-up delay-14">
        <button-82 @onClick="sendConfirm">Xác nhận</button-82>
      </div>
    </div>
  </div>
</template>

<script>
import Button82 from '@/components/Common/Button82'
import api from '@/common/api'

export default {
  name: 'ConfirmVue',
  data: function () {
    return {
      name: null,
      number: null
    }
  },
  components: {
    'button-82': Button82
  },
  methods: {
    sendConfirm: function () {
      let prefix = ''
      if (this.$route.fullPath === 'toan-ngoc') {
        prefix = '.CR'
      } else {
        prefix = '.CD'
      }
      const body = {
        name: this.name + prefix,
        number: this.number
      }
      const vm = this
      api.addConfirm(body).then(res => {
        if (res.status === 'success') {
          vm.$router.push('/than ks')
        }
      })
    }
  }
}
</script>

<style scoped>
.btn-82 {
  max-height: 40px;
}
.goToTop {
  position: absolute;
  right: -40px;
  font-size: 30px;
  bottom: 10px;
  cursor: pointer;
}
.goToTop i {
  animation: mymove 1.5s;
  animation-iteration-count: infinite;
}

@keyframes mymove {
  0%   {color: white;}
  50%  {color: rgb(232, 207, 207);}
  100% {color: white}
}
.confirm-container {
  position: fixed;
  bottom: 0;
  background-color: rgb(232, 207, 207);
  width: 100%;
  min-height: 70px;
  z-index: 100;
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
</style>
