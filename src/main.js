import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import { createProvider } from './vue-apollo'
import VueMask from 'v-mask'

import elementLangEn from 'element-ui/lib/locale/lang/en';
import elementLocale from 'element-ui/lib/locale';
elementLocale.use(elementLangEn);

import 'element-ui/lib/theme-chalk/index.css'
import './assets/icons/style.css'
import './assets/styles.css'


Vue.config.productionTip = false

Vue.use(VueMask)
Vue.use(ElementUI)

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
