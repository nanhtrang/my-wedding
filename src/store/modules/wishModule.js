import mutationTypes from '@/store/types/mutationTypes'
import actionTypes from '@/store/types/actionTypes'
import http from '@/common/http'

const url = '/method-wish'

const state = {
  wishList: []
}

const getters = {
  getWishList: function () {
    return state.wishList
  }
}

const actions = {
  [actionTypes.GET_WISH](context) {
    return new Promise((resolve, reject) => {
      http.GET(url, res => {
        context.commit(mutationTypes.UPDATE_WISH_MUTATION, res.data)
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  [actionTypes.ADD_WISH](context, body) {
    return new Promise((resolve, reject) => {
      http.POST(url, body, res => {
        if (res.status === 'success') {
          context.commit(mutationTypes.UPDATE_WISH_MUTATION, res.data.list)
          resolve(res)
        }
      },err => {
        reject(err)
      }, false, true)
    })
  },
  [actionTypes.DELETE_WISH](context, body) {
    return new Promise((resolve, reject) => {
      http.DELETE(url, body, res => {
        context.commit(mutationTypes.UPDATE_WISH_MUTATION, res.data.list)
        resolve(res)
      }, err => {
        reject(err)
      }, true, false)
    })
  }
}

const mutations = {
  [mutationTypes.UPDATE_WISH_MUTATION] (state, newList) {
    state.wishList = newList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
