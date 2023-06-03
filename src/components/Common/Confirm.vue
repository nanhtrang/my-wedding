<template>
  <div id="confirm-bar" class="confirm-container py-2 animation-fade-in-up delay-06 border-top">
    <div class="row container m-auto" style="position: relative">
      <a class="goToTop" href="#">
        <i class="fa-solid fa-angles-up"></i>
      </a>
      <div class="d-flex align-items-center col-sm-4 justify-content-end animation-fade-in-up delay-10">
        Vui lòng xác nhận giúp vợ chồng mình để có một sự chuẩn bị tốt nhất nhé!!!</div>
      <div class="d-inline-flex align-items-center justify-content-start col-sm-5 animation-fade-in-up delay-12">
        <input placeholder="Họ và tên bạn" v-model="name"> &nbsp;
        <input placeholder="Bạn đi mấy người" v-model="number" type="number" maxlength="1" @keydown="keydown">
      </div>
      <div class="col-sm-3 d-inline-flex mt-2 animation-fade-in-up delay-14">
        <button-82 @onClick="sendConfirm">
          <span v-if="send === 0">
            Xác nhận
          </span>
          <template v-if="send !== 0">
            <span v-if="send === 1">
              Đang gửi <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </span>
            <span v-else>
              Đã gửi <i class="fa-solid fa-circle-check"></i>
            </span>
          </template>
        </button-82>
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
      number: null,
      send: 0
    }
  },
  watch: {
    number: {
      handler() {
        if (isNaN(this.number)) this.number = ""
      }
    }
  },
  components: {
    'button-82': Button82
  },
  methods: {
    keydown: function (e) {
      const codes = [
        'Backspace',
        'Delete'
      ]
      if (e.key === 'e') {
        e.preventDefault()
      }
      if (this.number && this.number.length === 1) {
        if (!codes.includes(e.code) ) {
          e.preventDefault()
        }
      }
    },
    sendConfirm: function () {
      let addition = ''
      if (this.$route.fullPath === 'toan-ngoc') {
        addition = true
      } else {
        addition = false
      }
      const body = {
        name: this.name,
        number: this.number,
        addition
      }
      const vm = this
      api.addConfirm(body).then(res => {
        if (res.status === 'success') {
          // vm.$router.push('/thanks')
          vm.send = 1
          setTimeout(() => {
            vm.send = 2
            vm.name = ""
            vm.number = ""
            setTimeout(() => {
              document.getElementById('confirm-bar').classList.add('confirm-bar-leave')
            }, 500)
          }, 1500)
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

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
}
.lds-ellipsis div {
  position: absolute;
  top: -5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

#confirm-bar {
  transition: bottom ease-in-out 1s;
}

.confirm-bar-leave {
  opacity: 0;
  bottom: -100%;
}

</style>
