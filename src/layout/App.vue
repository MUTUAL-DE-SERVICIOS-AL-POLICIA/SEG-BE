<template>
  <div>
      <Appbar />
      PAGINA PRINCIPAL

        <Footer />

  </div>
</template>

<script>
import Appbar from '@/layout/Appbar'

import Footer from '@/layout/Footer'


export default {
  name: 'app-index',
  components: {
    Appbar,
    Footer
  },
}
</script>

<style>

</style>