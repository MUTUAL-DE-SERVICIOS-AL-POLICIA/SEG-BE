<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    :style="{ background: $vuetify.theme.themes['light'].primary }"
  >
  <v-avatar :tile="true">
        <img :src="require('@/assets/logo.png')" alt="logo">
   </v-avatar>
    <v-toolbar-title style="color: #fff; font-weight: bold" v-text="title" />
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