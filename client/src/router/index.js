import { createRouter, createWebHistory } from 'vue-router'
import mainCocktail from '../views/mainCocktail.vue'
import cocktailCreater from '../views/cocktailCreater.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainCocktail
    },
    {
      path: '/create',
      name: 'cocktailCreater',
      component: cocktailCreater
    }
  ]
})

export default router


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