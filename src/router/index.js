import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeLayout from '../components/HomeLayout.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: HomeLayout,
    redirect: 'documents',
    children: [
      {
        path: '/documents',
        name: 'Documents',
        component: () => import('../components/DocumentList.vue'),
        meta: {
          title: '文档',
          auth: true
        }
      },
      {
        path: '/editor',
        name: 'Editor',
        component: () => import('../components/MarkdownEditor.vue'),
        meta: {
          title: '创作',
          auth: true
        }
      }
    ]
  },

  { path: '/login', name: 'login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.auth) {
    const cmsId = localStorage.getItem('cmsId')
    if (cmsId) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}

export default router
