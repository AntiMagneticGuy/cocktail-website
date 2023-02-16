import { createRouter, createWebHistory } from 'vue-router'
import mainCocktail from '../views/mainCocktail.vue'
import cocktailCreater from '../views/cocktailCreater.vue'

let routeList = [
    {
      path: '/',
      name: 'main',
      component: mainCocktail,
      meta: {auth: false}
    },
    {
      path: '/create',
      name: 'cocktailCreater',
      component: cocktailCreater,
      meta: {auth: true}
    }
  ]

  //console.log(routeList)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
})


router.beforeEach(async (to, from) => {
    

});

/*
to:{"fullPath":"/create","path":"/create","query":{},"hash":"","name":"cocktailCreater","params":{},"matched":[{"path":"/create","name":"cocktailCreater","meta":{"auth":true},"props":{"default":false},"children":[],"instances":{},"leaveGuards":{},"updateGuards":{},"enterCallbacks":{},"components":{"default":{"__scopeId":"data-v-d2aec977"}}}],"meta":{"auth":true},"href":"/create"}


*/
export default router
export const rList = routeList

/*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mainCocktail.vue')
    }
    */