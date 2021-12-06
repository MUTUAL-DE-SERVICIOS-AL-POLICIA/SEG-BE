<template>
  <v-app>
    <v-content>
      <div id="app">
        <div id="nav">
          <Appbar />
          <Main />
          <Footer />
        </div>
      </div>
    </v-content>
  </v-app>
</template>
<script>
import Appbar from '@/layout/Appbar.vue';
import Main from "@/components/main.vue";
import Footer from '@/layout/Footer.vue';

export default {
  components: {
    Appbar,
    Main,
    Footer
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
