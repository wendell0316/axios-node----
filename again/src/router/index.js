import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import a from '@/components/a'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path: '/a',
    	name: 'a',
    	component: a
    }
  ]
})
