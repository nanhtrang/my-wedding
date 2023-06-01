import Library from 'axios'
import Store from '../store/index'
import actionTypes from '@/store/types/actionTypes'

console.log(process.env.VUE_APP_HOST)
const http = Library.create({
  baseURL: process.env.VUE_APP_HOST
})
http.defaults.timeout = 30000

function configHeaderApi () {
  return {
    // 'Cache-Control': 'no-cache, no-store, must-revalidate',
    // 'Pragma': 'no-cache',
    // 'Expires': '0',
    // 'X-CmdId': '',
    // 'Accept-Language': Store.getters.getLang,
    // 'Authorization': window.$cookies.isKey('Authorization') ? window.$cookies.get('Authorization') : ''
    // 'X-SentTime': '123456',
    // 'CompanyId': window.$cookies.get('CompanyId')
  }
}

function GET_NO_HEADER (url, successCallBack, errorCallBack) {
  http.get(url)
    .then(rawResponse => {
      if (typeof successCallBack === 'function') {
        successCallBack(rawResponse.data)
      }
    })
    .catch(error => {
      if (typeof errorCallBack === 'function') {
        errorCallBack(error)
      }
    })
}

function GET (url, params, successCallBack, errorCallBack) {
  http.get(url, {
    headers: configHeaderApi(),
    params: params
  })
    .then(rawResponse => {
      if (typeof successCallBack === 'function') {
        successCallBack(rawResponse.data)
      }
    })
    .catch(error => {
      if (typeof errorCallBack === 'function') {
        errorCallBack(error)
      }
    })
}

function GET_PARAM (url, param, successCallBack, errorCallBack) {
  http.get(url, {
    headers: configHeaderApi(),
    params: param
  })
    .then(rawResponse => {
      if (typeof successCallBack === 'function') {
        successCallBack(rawResponse.data)
      }
    })
    .catch(error => {
      if (typeof errorCallBack === 'function') {
        errorCallBack(error)
      }
    })
}

function POST (url, body, successCallBack, errorCallBack, showToast, loading) {
  if (loading) {
    Store.dispatch(actionTypes.LOADING, true).then(() => {})
  }
  http.post(url, body, {
    headers: configHeaderApi()
  })
    .then(rawResponse => {
      if (typeof successCallBack === 'function') {
        successCallBack(rawResponse.data)
      }
      setTimeout(() => {
        closeLoading()
      }, 500)
    })
    .catch(error => {
      if (typeof errorCallBack === 'function') {
        errorCallBack(error)
      }
    })
}

function DELETE (url, body, successCallBack, errorCallBack, showToast, loading) {
  http.delete(url, {
    headers: configHeaderApi(),
    data: body
  })
    .then(rawResponse => {
      if (typeof successCallBack === 'function') {
        successCallBack(rawResponse.data)
      }
    })
    .catch(error => {
      if (typeof errorCallBack === 'function') {
        errorCallBack(error)
      }
    })
}

// function checkError (error) {
//   closeLoading()
//   if (error.message.includes('401')) {
//     window.$cookies.remove('Authorization')
//     window.location.href = '#/login'
//   }
//   if (error.message.includes('403')) {
//     window.location.href = '#/403'
//   }
//   if (error.message.includes('500')) {
//     window.location.href = '#/500'
//   }
// }
//
function closeLoading () {
  if (Store.getters.getLoading) {
    Store.dispatch(actionTypes.LOADING, false).then(res => {})
  }
}

export default { GET, POST, DELETE, GET_NO_HEADER, GET_PARAM }
