import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b59c4966 = () => interopDefault(import('../pages/addproject.vue' /* webpackChunkName: "pages/addproject" */))
const _8d03fb0a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _8874b8ea = () => interopDefault(import('../pages/contact-thanks.vue' /* webpackChunkName: "pages/contact-thanks" */))
const _09fea83c = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _e0bad21c = () => interopDefault(import('../pages/project-thanks.vue' /* webpackChunkName: "pages/project-thanks" */))
const _32e085a2 = () => interopDefault(import('../pages/projectboard.vue' /* webpackChunkName: "pages/projectboard" */))
const _14e04117 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _2976978d = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _4dfe72ed = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addproject",
    component: _b59c4966,
    name: "addproject"
  }, {
    path: "/contact",
    component: _8d03fb0a,
    name: "contact"
  }, {
    path: "/contact-thanks",
    component: _8874b8ea,
    name: "contact-thanks"
  }, {
    path: "/contribute",
    component: _09fea83c,
    name: "contribute"
  }, {
    path: "/project-thanks",
    component: _e0bad21c,
    name: "project-thanks"
  }, {
    path: "/projectboard",
    component: _32e085a2,
    name: "projectboard"
  }, {
    path: "/signin",
    component: _14e04117,
    name: "signin"
  }, {
    path: "/signup",
    component: _2976978d,
    name: "signup"
  }, {
    path: "/",
    component: _4dfe72ed,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
