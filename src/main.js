import Vue from 'vue'
import App from './App.vue'
import store from "./store/params.js"

import { MdDrawer, MdList } from 'vue-material/dist/components'
//import VueMaterial from 'vue-material' //TODO change back
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDrawer); //TODO change back
Vue.use(MdList)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faExpand, faFileImage, faFileCode, faFileDownload, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //TODO change

library.add(faBars, faExpand, faFileImage, faFileCode, faFileDownload, faFileUpload);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
