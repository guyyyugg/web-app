import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
Vue.use(VueRouter)

// function check(to, from, next) {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//       alert("No Logged /in");
//       next({
//         path: "/login",
//       });
//     } else {
//       alert("Logged in");
//       next({
//         path: "/adminhome11",
//       });
//     }
//   });
// }
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home11.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
  {
    path: '/home1',
    name: 'home1',
    component: () => import('../views/home1.vue')
  },
  {
    path: '/Character',
    name: 'Character',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/Leaguechamp',
    name: 'Leaguechamp',
    component: () => import('../views/Leaguechamp.vue')
  },
  {
    path: '/Leaguepage',
    name: 'Leaguepage',
    component: () => import('../views/Leaguepage.vue')
  }
  ,
  {
    path: '/daosunwo',
    name: 'daosunwo',
    component: () => import('../views/daosunwo.vue')
  },
  {
    path: '/Character2',
    name: 'Character2',
    component: () => import('../views/Character2.vue')
  }
  ,
  {
    path: '/Leaguechamp2',
    name: 'Leaguechamp2',
    component: () => import('../views/Leaguechamp2.vue')
  },
  {
    path: '/Leaguepage2',
    name: 'Leaguepage2',
    component: () => import('../views/Leaguepage2.vue')
  }
  ,
  {
    path: '/daosunwo2',
    name: 'daosunwo2',
    component: () => import('../views/daosunwo2.vue')
  }
  ,
  {
    path: '/champpage2',
    name: 'champpage2',
    component: () => import('../views/champpage2.vue')
  }
  ,
  {
    path: '/adminhome11',
    name: 'adminhome11',
    // beforeEnter: check,
    component: () => import('../views/adminhome11.vue')
  }
  ,
  {
    path: '/adminaddplayer',
    name: 'adminaddplayer',
    component: () => import('../views/adminaddplayer.vue')
  }
  ,
  {
    path: '/admindaosunwo2',
    name: 'admindaosunwo2',
    component: () => import('../views/admindaosunwo2.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/adminLeaguechamp2',
    name: 'adminLeaguechamp2',
    component: () => import('../views/adminLeaguechamp2.vue')
  }
  ,
  {
    path: '/updatepic11',
    name: 'updatepic11',
    component: () => import('../views/updatepic11.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
