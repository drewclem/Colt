import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b59c4966 = () => interopDefault(import('../pages/addproject.vue' /* webpackChunkName: "pages/addproject" */))
const _8d03fb0a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _8874b8ea = () => interopDefault(import('../pages/contact-thanks.vue' /* webpackChunkName: "pages/contact-thanks" */))
const _09fea83c = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _e0bad21c = () => interopDefault(import('../pages/project-thanks.vue' /* webpackChunkName: "pages/project-thanks" */))
const _32e085a2 = () => interopDefault(import('../pages/projectboard.vue' /* webpackChunkName: "pages/projectboard" */))
const _14e04117 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _2976978d = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _4dfe72ed = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
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
  })
}
