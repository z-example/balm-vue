<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>thx <a href="//balmjs.com/">BalmJS</a></p>

    <!-- Balm UI -->
    <h2>Balm UI</h2>
    <ui-button>Text</ui-button>
    <ui-button outlined>Outlined</ui-button>
    <ui-button raised>Raised</ui-button>

    <h2>路由</h2>
    <div>
      <!-- 路由 https://router.vuejs.org/zh/installation.html-->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/table">Show Balm UI Table</router-link>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>

</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello Vue App',
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
