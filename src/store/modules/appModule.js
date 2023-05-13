import actionTypes from '@/store/types/actionTypes'
import mutationTypes from '@/store/types/mutationTypes'

const state = {
  loading: true,
}

const getters = {
  getLoading: function () {
    return state.loading
  }
}

const actions = {
  [actionTypes.LOADING](context, loading) {
    context.commit(mutationTypes.LOADING_MUTATION, loading)
  }
}

const mutations = {
  [mutationTypes.LOADING_MUTATION] (state, loading) {
    state.loading = loading
  }
}

export default {
  getters,
  state,
  actions,
  mutations
}
