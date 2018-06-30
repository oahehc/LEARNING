import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1582bb13 = () => import('..\\pages\\counter.vue' /* webpackChunkName: "pages_counter" */).then(m => m.default || m)
const _a64874d2 = () => import('..\\pages\\i18n.vue' /* webpackChunkName: "pages_i18n" */).then(m => m.default || m)
const _c889d8f4 = () => import('..\\pages\\i18n\\_lang.vue' /* webpackChunkName: "pages_i18n__lang" */).then(m => m.default || m)
const _892572ae = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _7fbedf51 = () => import('..\\pages\\_id.vue' /* webpackChunkName: "pages__id" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/counter",
			component: _1582bb13,
			name: "counter"
		},
		{
			path: "/i18n",
			component: _a64874d2,
			name: "i18n",
			children: [
				{
					path: ":lang?",
					component: _c889d8f4,
					name: "i18n-lang"
				}
			]
		},
		{
			path: "/",
			component: _892572ae,
			name: "index"
		},
		{
			path: "/:id",
			component: _7fbedf51,
			name: "id"
		}
    ],
    
    
    fallback: false
  })
}
