<template>
  <v-app>
    <v-main>
      <div id="app">
        <div id="nav">
          <Appbar />
          <Main class="mb-10" />
        </div>
        <div id="nav">
          <Footer />
        </div>
      </div>
    </v-main>
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
