import { Message, Notification } from 'element-ui'

const install = (Vue) => {

  Vue.prototype.$baseMessage = (message, type) => {
    Message({
      offset: 60,
      showClose: true,
      message: message,
      type: type,
      dangerouslyUseHTMLString: true,
      duration: 3000
    })
  }

  Vue.prototype.$baseNotify = (message, title, type, position) => {
    Notification({
      title: title,
      message: message,
      position: position || 'top-right',
      type: type || 'success',
      duration: 3000
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install