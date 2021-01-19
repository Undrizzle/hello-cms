import Vue from 'vue'
import { login } from '../../api/user'
import { getAccessToken, setAccessToken } from '../../utils/accessToken'

const state = () => ({
  accessToken: getAccessToken(),
  username: '',
  avatar: ''
})

const getters = {
  username: (state) => state.username,
  avatar: (state) => state.avatar
}

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
    setAccessToken(accessToken)
  },
  setUsername(state, username) {
    state.username = username
  },
  setAvatar(state, avatar) {
    state.avatar = avatar
  }
}

const actions = {
  async login({ commit}, userInfo) {
    const { data }= await login(userInfo)
    console.log(data)
    const accessToken = data['cmsId']
    if (accessToken) {
      commit('setAccessToken', accessToken)
      const hour = new Date().getHours()
      const thisTime = 
        hour < 8
          ? '早上好'
          : hour <= 11
          ? '上午好'
          : hour <= 13
          ? '中午好'
          : hour < 18
          ? '下午好'
          : '晚上好'
      Vue.prototype.$baseNotify('欢迎登录CMS', `${thisTime}！`)    
    } else {
      Vue.prototype.$baseMessage(
        '登录接口异常，未正确返回accessToken...',
        'error'
      )
    }
  }
}

export default { state, getters, mutations, actions }