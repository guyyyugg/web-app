import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyA51WpuzivmeclTB6uP5q6Gyel26m0y9yk",
  authDomain: "webapp-football.firebaseapp.com",
  databaseURL: "https://webapp-football.firebaseio.com",
  projectId: "webapp-football",
  storageBucket: "webapp-football.appspot.com",
  messagingSenderId: "4471569320",
  appId: "1:4471569320:web:dd7ca041014f0b3623bb9d",
  measurementId: "G-ZZRXRMYXNK"
};
firebase.initializeApp(config)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
