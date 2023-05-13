<template>
  <div class="login-page-admin">
    <div class="login-box">
      <div class="row d-flex justify-content-center font-dancing-script" style="font-size: 40px">
        <div class="font-dancing-script d-flex justify-content-center align-items-center text-secondary">
          T <span class="material-symbols-outlined icon-heart"> favorite </span> N
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-left">
          Tên đăng nhập
        </div>
        <div class="col-sm-12">
          <input class="form-control" v-model="username">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-left">
          Mật khẩu
        </div>
        <div class="col-sm-12">
          <input class="form-control" type="password" v-model="password" @keydown="passwordKeydown">
        </div>
      </div>
      <div class="row mt-3 mb-2 d-flex justify-content-center">
        <toan-ngoc-wedding-button82
          @onClick="login"
        >Đăng nhập</toan-ngoc-wedding-button82>
      </div>
    </div>
  </div>
</template>

<script>
import ToanNgocWeddingButton82 from '@/components/Common/Button82'
import api from '@/common/api'
export default {
  name: 'LoginPage',
  components: { ToanNgocWeddingButton82 },
  data: function () {
    return {
      username: null,
      password: null
    }
  },
  mounted () {
  },
  methods: {
    passwordKeydown(e) {
      if (e.key.toString().toLowerCase() === 'enter') {
        this.login()
      }
    },
    login: function () {
      const body = {
        username: this.username, password: this.password
      }
      const vm = this
      api.login(body).then(res => {
        if (res.status === 'success') {
          vm.$cookies.set('account', res.data.username)
          vm.$router.push('/admin')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-page-admin {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
}
.form-control {
  border-width: 0px;
}
.login-box {
  background-color: #e8cfcf;
  max-width: 400px;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
