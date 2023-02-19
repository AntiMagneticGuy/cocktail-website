import { createRouter, createWebHistory } from 'vue-router'
import mainCocktail from '../views/mainCocktail.vue'
import cocktailCreater from '../views/cocktailCreater.vue'
import login from '../views/login.vue'

import VueJwtDecode from 'vue-jwt-decode'


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
    },
        {
      path: '/login',
      name: 'login',
      component: login,
      meta: {auth: false}
    },
        {
      path: '/logout',
      name: "logout",
       beforeEnter: (to, from) => {
        localStorage.removeItem("user");
        console.log("beforeEnter")
      },
      redirect: '/',
     
    },
  ]

  //console.log(routeList)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
})

import axios, { AxiosError } from 'axios'
router.beforeEach(async (to, from) => {
    if (to.meta.auth){
        try{
          let token = localStorage.getItem("user"); ///////////axios verify
          const config ={
            "x-access-token": token
          }
          if (!token) throw new Error("Not logged in");
          await axios.get("/node/auth",config)
          .then(res => console.log(res))
          .catch(err => {
            console.log(err.response.data);
            localStorage.removeItem("user");
            throw new Error("Invalid token");
          });

          let decoded = VueJwtDecode.decode(token);
          console.log(decoded.userName, " has logged in")

        } catch (err){
          console.log(err);
            return {name: 'login'}
        }

    }
    // if 404 ..
    //

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