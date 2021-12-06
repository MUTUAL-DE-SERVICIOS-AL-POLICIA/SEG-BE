<template>
  <v-container fluid fill-height>
    <v-row align-center justify="center">
      <v-col cols="12" md="6" class="pa-0 ma-0">
        <v-card class="elevation-4">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="flex text-center"
              >SEGUIMIENTO DE TRÁMITES <br> COMPLEMENTO ECONÓMICO</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-row class="pa-0 ma-0">
                <v-col xs="12" sm="12" md="12" class="pa-0 ma-0"
                  >Cédula de Identidad
                  <v-row class="pa-0 ma-0">
                    <v-col xs="8" md="8">
                      <v-text-field
                        prepend-icon="mdi-card-account-details"
                        name="ci"
                        type="text"
                        outlined
                        dense
                        label="Número"
                        v-model="identity_card"
                      ></v-text-field>
                    </v-col>
                    <v-col xs="4" md="4">
                      <v-text-field
                        name="complemento"
                        type="text"
                        outlined
                        dense
                        label="Complemento"
                        v-model="complement"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="pa-0 ma-0">
                <v-col xs="12" sm="12" md="12" class="pa-0 ma-0"
                  >Fecha de Nacimiento
                  <v-row class="pa-0 ma-0">
                    <v-col xs="4" md="3">
                      <v-text-field
                        prepend-icon="mdi-calendar-range"
                        name="day"
                        label="Dia"
                        type="text"
                        outlined
                        dense
                        v-model="day"
                      ></v-text-field>
                    </v-col>
                    <v-col xs="4" md="5">
                      <v-select
                        :items="months"
                        item-text="name"
                        item-value="value"
                        label="Mes"
                        type="text"
                        outlined
                        dense
                        v-model="month"
                      ></v-select>
                    </v-col>
                    <v-col xs="4" md="4">
                      <v-text-field
                        name="year"
                        label="Año"
                        type="text"
                        outlined
                        dense
                        v-model="year"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="pa-0 ma-0">
                <v-col xs="12" sm="12" md="12">
                  <v-btn block color="primary" @click="getInfo()"
                    >CONSULTAR</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
        <div >

        </div>
        <div class="pa-3"></div>
      <v-card class="elevation-4" v-if="result != null">
            <!--<div v-for="(res,i) in result" :key="i">
            <p>
              {{ res }}
            </p>
          </div>-->
          <card-title>
            <v-card color="secondary">
              <v-row class="text-uppercase pa-2 pb-1">
                <v-col xs="12" sm="12" md="12" class="pa-0"
                  >Semestre: {{ result.data[0].title }}</v-col
                >
                <v-col xs="12" sm="12" md="12" class="pa-0"
                  >Estado: {{ result.data[0].subtitle }}</v-col
                >
              </v-row>
            </v-card>
          </card-title>
          <v-card-text>
            <v-row class="pt-2">
              <v-col xs="12" sm="12" md="12" class="pa-2">
                <v-row>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Beneficiario:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[0].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right"> CI: </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[1].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Semestre:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[2].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Fecha de recepción:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[3].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Nº de trámite:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[4].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Tipo de prestación:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[5].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Tipo de trámite:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[6].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Estado de trámite:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[7].value }}
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-right">
                    Observaciones del trámite:
                  </v-col>
                  <v-col xs="12" sm="6" md="6" class="text-left">
                    {{ result.data[0].display[8].value }}
                  </v-col>
                </v-row>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "main",
  data: () => ({
    result: null,
    loading: false,
    identity_card: null,
    complement: null,
    day: null,
    month: null,
    year: null,
    months: [
      { name: "ENERO", value: "01" },
      { name: "FEBRERO", value: "02" },
      { name: "MARZO", value: "03" },
      { name: "ABRIL", value: "04" },
      { name: "MAYO", value: "05" },
      { name: "JUNIO", value: "06" },
      { name: "JULIO", value: "07" },
      { name: "AGOSTO", value: "08" },
      { name: "SEPTIEMBRE", value: "09" },
      { name: "OCTUBRE", value: "10" },
      { name: "NOVIEMBRE", value: "11" },
      { name: "DICIEMBRE", value: "12" },
    ],

    birth_date: "null",
  }),

  mounted() {
    //this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        this.date()
        if(this.birth_date != null){
        this.loading = true;
        let res = await axios.get(
          `https://pvt.muserpol.gob.bo/api/v1/eco_com_procedure?identity_card=${this.identity_card}&birth_date=${this.birth_date}`
        );
        this.result = res.data.data;
        this.loading = false;
        }else{
          console.log('faltan parametros')
        }

      } catch (e) {
        console.log(e);
        this.loading = false;
      }
    },
    date() {
      if (this.day != null && this.month != null && this.year != null ) {
        this.birth_date = this.year +'-'+this.month+'-'+this.day
        return this.birth_date;
      } else {
        return this.birth_date;
      }
    },
  },
};
</script>
