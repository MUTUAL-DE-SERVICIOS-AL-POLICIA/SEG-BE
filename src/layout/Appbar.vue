<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    :style="{ background: $vuetify.theme.themes['light'].primary }"  >
        <v-toolbar-title class="text-red" v-text="title" />
    <v-spacer />

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {

      title: "MUTUAL DE SERVICIOS AL POLICÍA",
    };
  },
};
</script>

<style>
</style>