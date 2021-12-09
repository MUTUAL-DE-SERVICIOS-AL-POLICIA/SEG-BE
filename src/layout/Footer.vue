<template>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
       class="font-weight-light overline py-0 elevation-0"
    >
      <v-card
        flat
        tile
        width="100%"
      >
        <v-card-text class="white--textgrey blue-grey lighten-5 elevation-2">
          Para mas información:
          &nbsp;
          <br>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  icon
                  x-small
                  @click.stop="routeWhatsapp()"
                  v-bind="attrs"
                v-on="on"
                  >
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
            </template>
            <span>Whatsapp</span>
          </v-tooltip>
          &nbsp;&nbsp;&nbsp;

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  icon
                  x-small
                  @click.stop="routeFacebook()"
                  v-bind="attrs"
                v-on="on"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
            </template>
            <span>Facebook</span>
          </v-tooltip>
          &nbsp;&nbsp;&nbsp;

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  icon
                  x-small
                  @click.stop="routeChatMus()"
                  v-bind="attrs"
                v-on="on"
                  >
                    <v-icon>mdi-message-text</v-icon>
                  </v-btn>
            </template>
            <span>Chat Institucional</span>
          </v-tooltip>
          &nbsp;&nbsp;&nbsp;
        </v-card-text>
    <div>MUSERPOL <v-icon class="mdi-flip-h">mdi-copyright</v-icon> {{ new Date().getFullYear() }}</div>
      </v-card>
    </v-footer>
</template>
<script>
  export default {
    name: 'app-footer',
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        attrs.absolute = true
        return attrs
      },
    },

    methods: {
    routeWhatsapp() {
      window.open(
        "https://api.whatsapp.com/send?phone=59172033014",
        "_blank"
      );
    },
    routeFacebook() {
      window.open(
        "https://m.me/muserpol",
        "_blank"
      );
    },
    routeChatMus() {
      window.open(
        "https://www.muserpol.gob.bo",
        "_blank"
      );
    },
  },

    
  }
</script>
