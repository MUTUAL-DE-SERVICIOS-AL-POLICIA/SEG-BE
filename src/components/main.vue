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
                  > 
                  <h3><v-icon >mdi-card-account-details</v-icon> Cédula de Identidad</h3>
                  <v-row class="pa-0 ma-0">
                    <v-col cols="12" class="pa-0 ma-0 px-2" xs="12" md="12">
                      <v-text-field
                        name="ci"
                        type="text"
                        outlined
                        dense
                        label="Número"
                        v-model="identity_card"
                        min="0"
                        :rules="identityCardRules"
                        required
                        clearable
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="pa-0 ma-0">
                <v-col cols="12" xs="12" md="12" class="pa-0 ma-0"
                  ><h3><v-icon aria-hidden="false">mdi-calendar-range</v-icon> Fecha de Nacimiento</h3>
                  <v-row class="pa-0 ma-0">
                    <v-col cols="12" class="pa-0 ma-0 px-2" xs="12" md="3">
                      <v-text-field
                        name="day"
                        label="Dia"
                        type="number"
                        outlined
                        dense
                        v-model="day"
                        min="1"
                        max="31"
                        :rules = "dayRules"
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0 px-2" xs="12" md="5">
                      <v-select
                        :items="months"
                        item-text="name"
                        item-value="value"
                        label="Mes"
                        type="text"
                        outlined
                        dense
                        v-model="month"
                        clearable
                        :rules = "monthRules"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" class="pa-0 ma-0 px-2" xs="12" md="4">
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
                        clearable
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
               </v-row>
              <v-row class="pa-0 ma-0">
                <v-col xs="12" sm="12" md="12">
                  <v-btn 
                    block 
                    color="primary"
                    @click="getInfo()"
                    :loading = "loading"
                    ><h3>CONSULTAR</h3></v-btn
                  >
                </v-col>
                 <v-col xs="12" sm="12" md="12" v-if="error">
                   <v-alert
                    text
                    :type="error ? 'error' : 'success'" class="ma-0"
                    >
                    {{message}}
                </v-alert>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      <div v-if="!error" class="pt-3">
        <template v-if="Object.entries(last_item).length !== 0">
          <v-card class="elevation-4">
              <v-toolbar color="secondary">
                <v-toolbar-title class="flex text-center"
                  >
                    <v-row class="text-uppercase font-weight-medium subtitle-2">
                      <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pt-3"
                        >{{ last_item.title }}</v-col
                      >
                      <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pb-3 subtitle-1"
                        ><strong>Estado: {{ last_item.estado  }}</strong></v-col
                      >
                    </v-row></v-toolbar-title
                >
              </v-toolbar>

              <v-card-text>
                <v-row class="pt-2">
                  <v-col cols="12" xs="12" sm="12" md="12" class="pa-2">
                    <v-row>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Beneficiario:</strong> {{ last_item.beneficiario}}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Cédula de Identidad:</strong>  {{ last_item.ci }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Semestre: </strong> {{ last_item.semestre}}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Fecha de recepción:</strong>  {{ last_item.fecha_de_recepcion }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Nº de trámite:</strong>  {{ last_item.nro_tramite }} 
                         <v-divider></v-divider>
                      </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Tipo de prestación:</strong>  {{ last_item.tipo_de_prestacion }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Tipo de trámite:</strong>  {{ last_item.tipo_de_tramite }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="12" class="text-left py-0">
                        <h4>Observaciones del trámite:</h4>
                        <div v-if="last_item.observaciones_del_tramite != 'Ninguna'">
                          <div v-for="(obs, j) in last_item.observaciones_del_tramite" :key="j">
                             - {{ obs }}
                          </div>
                        </div>
                        <div v-else>
                           - Ninguna
                        </div>
                         <v-divider></v-divider>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col></v-col>
                </v-row>
              </v-card-text>
          </v-card>

          <v-btn
              class="ma-4 pa-4"
              color="info"
              text  
              @click.stop="showHistory = true"
            >
              <v-icon left>
                mdi-eye
              </v-icon>
              Ver Trámites históricos
          </v-btn>
        </template>
        <div>
          <template class="elevation-4" v-if="result != null && showHistory">
            <div v-for="(item, i) in result" :key="i">
              <v-card class="mt-3">
              <v-toolbar color="secondary">
                <v-toolbar-title class="flex text-center"
                  >
                    <v-row class="text-uppercase font-weight-medium subtitle-2">
                      <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pt-3"
                        >{{ item.title }}</v-col
                      >
                      <v-col cols="12" xs="12" sm="12" md="12" class="pa-0 pb-3 subtitle-1"
                        ><strong>Estado: {{ item.estado  }}</strong></v-col
                      >
                    </v-row></v-toolbar-title
                >
              </v-toolbar>

              <v-card-text>
                <v-row class="pt-2">
                  <v-col cols="12" xs="12" sm="12" md="12" class="pa-2">
                    <v-row>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Beneficiario:</strong> {{ item.beneficiario}}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Cédula de Identidad:</strong>  {{ item.ci }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Semestre: </strong> {{ item.semestre}}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Fecha de recepción:</strong>  {{ item.fecha_de_recepcion }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Nº de trámite:</strong>  {{ item.nro_tramite }} 
                         <v-divider></v-divider>
                      </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Tipo de prestación:</strong>  {{ item.tipo_de_prestacion }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6" md="6" class="text-left py-0">
                        <strong>Tipo de trámite:</strong>  {{ item.tipo_de_tramite }}
                         <v-divider></v-divider>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="12" class="text-left py-0">
                        <h4>Observaciones del trámite:</h4>
                        <div v-if="item.observaciones_del_tramite != 'Ninguna'">
                          <div v-for="(obs, j) in item.observaciones_del_tramite" :key="j">
                             - {{ obs }}
                          </div>
                        </div>
                        <div v-else>
                           - Ninguna
                        </div>
                         <v-divider></v-divider>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col></v-col>
                </v-row>
              </v-card-text>
              </v-card>
            </div>
          </template>
        </div>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import axios from "axios";
export default {
  name: "inicio",
  data: () => ({
    result: [],
    last_item: {},
    loading: false,
    identity_card: '',
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
    showHistory: false,
    message: '',
    error: false,
    //Reglas de validación
    identityCardRules: [
        v => !!v || 'Cédula de Identidad es requerido',
        v => (v && v.length >= 4) || 'La Cédula de Identidad debe tener como mínimo 4 dígitos',
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

  watch: {
    identity_card: function (newVal, oldVal){
      if(newVal != oldVal){
        this.last_item = {}
        this.showHistory = false
        this.error = false
        this.result = []
      }
    },
    day: function (newVal, oldVal){
      if(newVal != oldVal){
        this.last_item = {}
        this.showHistory = false
        this.error = false
        this.result = []
      }
    },
    month: function (newVal, oldVal){
      if(newVal != oldVal){
        this.last_item = {}
        this.showHistory = false
        this.error = false
        this.result = []
      }
    },
    year: function (newVal, oldVal){
      if(newVal != oldVal){
        this.last_item = {}
        this.showHistory = false
        this.error = false
        this.result = []
      }
    },
  },
  methods: {
      async getInfo() {
        try {
          this.validate()
          this.date();
          let result = []
          if (this.birth_date != null) {
            this.loading = true;
            let res = await axios.get(
              `https://pvt.muserpol.gob.bo/api/v1/eco_com_procedure?identity_card=${this.identity_card}&birth_date=${this.birth_date}`
            );
            result = res.data.data
            if(Object.entries(result).length !== 0){
              this.last_item =  result[0]
              for (let i = 1; i < result.length; i++) {
                  this.result.push(result[i])
              }
              this.loading = false
            }else{
              this.loading = false
              this.error = res.data.error
              this.message = res.data.message
            }

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
      validate () {
        this.$refs.form.validate()
      },
  },
};
</script>
