import http from './http.js'
const url = '/method-wish'
const url1 = '/confirm'
const login = '/login'

export default {
  getAllWish: function () {
    return new Promise((resolve, reject) => {
      http.GET(url, success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  },
  addWish: function (body) {
    return new Promise((resolve, reject) => {
      http.POST(url, body,success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  },
  deleteWish: function (body) {
    return new Promise((resolve, reject) => {
      http.DELETE(url, body,success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  },
  addConfirm: function (body) {
    return new Promise((resolve, reject) => {
      http.POST(url1, body, res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  login: function (body) {
    return new Promise((resolve, reject) => {
      http.POST(login, body, res => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
}
