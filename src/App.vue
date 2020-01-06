<template>
  <div id="app">
    <router-view>
      <Home />
    </router-view>
  </div>
</template>

<script>
import history from './services/history';

import Home from './pages/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
  props: history,
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', Helvetica, sans-serif;
}

body {
  color: #fff;
  background: #0b0a0d;
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
</style>
