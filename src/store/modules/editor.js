import Vue from 'vue'
import { publish } from '../../api/publish'

const state = () => ({
  raw: '',
  render: '',
  path: '',
  title: ''
})

const getters = {
  raw: (state) => state.raw,
  render: (state) => state.render,
  path: (state) => state.path, 
  title: (state) => state.title
}

const mutations = {
  save(state, saveInfo) {
    state.raw = saveInfo.raw
    state.render = saveInfo.render
  },
  publish(state, publishInfo) {
    state.path = publishInfo.path
    state.title = publishInfo.title
  }
}

const actions = {
  async save({ commit }, saveInfo) {
    commit('save', saveInfo)
  },
  async publish({ commit, state }, publishInfo) {
    commit('publish', publishInfo)
    const info = {
      'path': state.path,
      'title': state.title,
      'raw': state.raw,
      'render': state.render
    }
    const { data } = await publish(info)
    if (data.code  == 2000) {
      Vue.prototype.$baseMessage('发布文章成功！', 'success')
    } else {
      Vue.prototype.$baseMessage('发布文章失败！', 'error')
    }
  }
}

export default { state, getters, mutations, actions }