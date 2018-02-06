import project from './projects.js'
import service from './service.js'
import meetUs from './meetus.js'
import contactUs from './contactus.js'
import home from './home.js'
import contactForm from './shared-component.js'
import routerFunc from './router.mounted.js'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/scrollNav*', redirect: '/projects' },
    { path: '/home', name: 'home', component: home },
    { path: '/projects', name: 'projects', component: project },
    { path: '/services', name: 'services', component: service },
    { path: '/meetus', name: 'meetus', component: meetUs },
    { path: '/contactus', name: 'contactus', component: contactUs },
  ]
})

new Vue({
	router,
  el: '#root',
  components: {
    contactForm: contactForm,
  },
  mounted: routerFunc,
})
