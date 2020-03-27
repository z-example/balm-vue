import Vue from 'vue';
import VueRouter from "vue-router"; //npm install vue-router | <script src="/path/to/vue-router.js"></script>
// import App from './views/layouts/app';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui'; // Mandatory
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // Optional
import BalmUINext from 'balm-ui/dist/balm-ui-next'; // Experimental

import Table from '@/views/pages/table.vue'

Vue.config.productionTip = false;
Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional
Vue.use(BalmUINext); // Experimental

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const router = new VueRouter({
  routes : [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/table', component: Table }
  ]
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router:router,
});
