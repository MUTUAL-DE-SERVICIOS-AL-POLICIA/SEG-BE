<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-row align-center justify="center">
          <v-col cols="12" md="6">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title
                  >CONSULTA COMPLEMENTO ECONÓMICO</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-row class="pa-0 ma-0">
                    <v-col md="8" class="pa-0 ma-0"
                      >Nro de Cédula de Identidad
                    </v-col>
                    <v-col md="4" class="pa-0 ma-0">Complemento de CI </v-col>
                  </v-row>

                  <v-row class="pa-0 ma-0">
                    <v-col md="8">
                      <v-text-field
                        prepend-icon="mdi-card-account-details"
                        name="ci"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col md="4">
                      <v-text-field
                        name="complemento"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row class="pa-0 ma-0">
                    <v-col class="pa-0 ma-0"> Fecha de Nacimiento </v-col>
                  </v-row>

                  <v-row class="pa-0 ma-0">
                    <v-col md="3">
                      <v-text-field
                        prepend-icon="mdi-calendar-range"
                        name="day"
                        label="Dia"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col md="5">
                      <v-text-field
                        name="month"
                        label="Mes"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col md="4">
                      <v-text-field
                        name="year"
                        label="Año"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="pa-5">
                <v-btn block color="primary" @click="ingreso()">INGRESAR</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
  methods: {
    ingreso() {
      this.$router.push("info");
    },
  },
};
</script>

<style></style>
