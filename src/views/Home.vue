<template>
  <div class="container"> 
    <h1 class="title">Software de mantenimiento</h1>
    <img class="gradient d-flex justify-content-center align-items-center" alt="Vue logo" src="../assets/logo.png">
    <DatePicker 
     v-bind="{
          value,
          label:'Fecha'
          }"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <!-- <button @click="insertar()" >Actualizar</button> -->
     <button @click.stop="stop" >click.stop</button>
     <button @submit.prevent="prevent" >submit.prevent</button>
     <button @click.stop.prevent="stopPrevent" >click.stop.prevent</button>
     <button @click.capture="capture" >click.capture</button>
     <button @click.self="self" >click.self</button>

  </div>
</template>

<script>
// @ is an alias to /src


import DatePicker from '@/components/datePicker.vue'
  import config from '../config';
export default {
  name: 'home',
  components: {
    DatePicker
  },methods: {
    stop(event){
      console.log(event);
      
    },
    prevent(event){
      console.log(event);
    },
    stopPrevent(event){
      console.log(event);
    },
    capture(event){
      console.log(event);
    },
    self(event){
      console.log(event);
    },
    insertar(){
      for (let i = 0; i < 1; i++) {
        this.$http.post(this.config.urlBase+'/'+this.tableName,this.insetData).then(resp=>{
          console.log(resp);          
        })
      }
    }
  },
  data(){
    return {
      value:new Date(),
      tableName:'ingresoAManteminiento',
      config,
      insetData:{
        MXE_CODIGO_EQUIPO: "5120",
        MXE_ESTADO: "OK ",
        MXE_FECHA: "2019-02-14T08:02:00.000Z",
        MXE_FECHA_CIERRE: "2019-04-04T14:05:00.000Z",
        MXE_FECHA_CREACION: "2019-04-08T19:43:00.000Z",
        MXE_ID_TABLA: 22,
        MXE_ID_USUARIO_CIERRE: 8,
        MXE_ID_USUARIO_CREACION: 8,
        MXE_LECTURA_DISTANCIA: "1",
        MXE_LECTURA_HOROMETRO: "1",
        MXE_LECTURA_HOROMETRO_2: "1",
        MXE_TIPO_MANTENIMIENTO: "P"
      }
    }
  }
}
</script>
