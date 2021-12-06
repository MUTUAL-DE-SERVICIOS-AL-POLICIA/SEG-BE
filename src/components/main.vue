<template>
  <v-container fluid fill-height>
    <v-row align-center justify="center">
      <v-col cols="12" xs="12" md="6" class="pa-0 ma-0">
        <v-card class="elevation-4">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="flex text-center"
              >SEGUIMIENTO DE TRÁMITES <br> COMPLEMENTO ECONÓMICO</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <v-form  ref="form">
              <v-row class="pa-0 ma-0">
                <v-col cols="12" xs="12" md="12" class="pa-0 ma-0"
                  >Cédula de Identidad
                  <v-row class="pa-0 ma-0">
                    <v-col cols="12" xs="12" md="8">
                      <v-text-field
                        prepend-icon="mdi-card-account-details"
                        name="ci"
                        type="text"
                        outlined
                        dense
                        label="Número"
                        v-model="identity_card"
                        min="0"
                        :rules="identityCardRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" xs="12" md="4">
                      <v-text-field
                        name="complemento"
                        type="text"
                        outlined
                        dense
                        label="Complemento"
                        v-model="complement"
                        :rules = "complementRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="pa-0 ma-0">
                <v-col cols="12" xs="12" md="12" class="pa-0 ma-0"
                  >Fecha de Nacimiento
                  <v-row class="pa-0 ma-0">
                    <v-col cols="12" xs="12" md="3">
                      <v-text-field
                        prepend-icon="mdi-calendar-range"
                        name="day"
                        label="Dia"
                        type="number"
                        outlined
                        dense
                        v-model="day"
                        min="1"
                        max="31"
                        :rules = "dayRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" xs="12" md="5">
                      <v-select
                        :items="months"
                        item-text="name"
                        item-value="value"
                        label="Mes"
                        type="text"
                        outlined
                        dense
                        v-model="month"
                        :rules = "monthRules"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" xs="12" md="4">
                      <v-text-field
                        name="year"
                        label="Año"
                        type="number"
                        outlined
                        dense
                        v-model="year"
                        min="1901"
                        max="2003"
                        :rules="yearRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
               </v-row>
              <v-row class="pa-0 ma-0">
                <v-col xs="12" sm="12" md="12">
                  <v-btn block color="primary" @click="validate()"
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
            <div v-for="(item, i) in result" :key="i">
  
                <v-card color="secondary">
                  <v-row class="text-uppercase">
                    <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pt-3"
                      >Semestre: {{ item.title }}</v-col
                    >
                    <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pb-3"
                      >Estado: {{ item.subtitle }}</v-col
                    >
                  </v-row>
                </v-card>
  
              <v-card-text>
                <v-row class="pt-2">
                  <v-col cols="12" xs="12" sm="12" md="12" class="pa-2">
                    <v-row>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-right">
                        Beneficiario:
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[0].value }}
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-right">
                        CI:
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[1].value }}
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-right">
                        Semestre:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[2].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Fecha de recepción:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[3].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Nº de trámite:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[4].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Tipo de prestación:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[5].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Tipo de trámite:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[6].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Estado de trámite:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        {{ item.display[7].value }}
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-right">
                        Observaciones del trámite:
                      </v-col>
                      <v-col xs="12" sm="6" md="6" class="text-left">
                        <div v-for="(obs, j) in item.display[8].value" :key="j">
                          {{j+1}}. {{obs}}
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col></v-col>
                </v-row>
              </v-card-text>
            </div>
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
    result: {},
    loading: false,
    identity_card: '',
    complement: '',
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
    identityCardRules: [
        v => !!v || 'Cédula de Identidad es requerido',
        v => (v && v.length >= 4) || 'La Cédula de Identidad debe tener como mínimo 4 dígitos',
      ],
    complementRules: [
        v => (v.length <= 2) || 'El complemento de Cédula de Identidad debe tener 2 caracteres',
      ],
    dayRules: [
        v => !!v || 'Día es requerido',
        v => ((v && v <= 31 && v.length <= 2)) || 'El día debe ser entre 1 y 31',
        v => v > 0 || 'El valor debe ser mayor a cero'
      ],
    monthRules: [
        v => !!v || 'Mes es requerido',
      ],
    yearRules: [
        v => !!v || 'Año es requerido',
        v => ((v && v <= 2003 && v.length <= 4)) || 'El año debe ser entre 1901 y 2003',
        v => v >=1901 || 'El valor debe ser mayor a 1900'
      ],
  }),

  mounted() {
    //this.getInfo();
  },
  methods: {
      async getInfo() {
        try {
          this.validate()
          this.date();
          if (this.birth_date != null) {
            this.loading = true;
            let res = await axios.get(
              `https://pvt.muserpol.gob.bo/api/v1/eco_com_procedure?identity_card=${this.identity_card}&birth_date=${this.birth_date}`
            );
            this.result = res.data.data.data;
            console.log(this.result);
            this.loading = false;
          } else {
            console.log("faltan parametros");
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
    validate() {
      if(this.$refs.form.validate()){
        this.getInfo()
      }
    },
  },
};
</script>
