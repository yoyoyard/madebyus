const Project = require('./projects.js')
const Techstack = require('./techstack.js')
const Samplecode = require('./samplecode.js')
const Service = require('./service.js')
const Meetus = require('./meetus.js')
const Contactus = require('./contactus.js')
const Home = require('./home.js')

const router = new VueRouter({
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Project },
    { path: '/techstack', name: 'techstack', component: Techstack },
    { path: '/samplecode', name: 'samplecode', component: Samplecode },
    { path: '/services', name: 'services', component: Service },
    { path: '/meetus', name: 'meetus', component: Meetus },
    { path: '/contactus', name: 'contactus', component: Contactus },
  ]
})

new Vue({
	router,
  el: '#root',
})
