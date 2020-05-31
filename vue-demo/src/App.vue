<template>
  <div id="app">
     <!-- 222 -->
    <button @click="hello">hello</button> 
    <router-view/>
  </div>
</template>
<script>
import {getHomeOne} from '@utils/interface.js'
export default {
  data () {
    return {

    }
  },
  mounted () {
    getHomeOne().then(res => {
      console.warn('homeOne', res);
    })
  },
  methods: {
    hello () {
      this.$router.push({
        path: '/helloWorld'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #000;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
