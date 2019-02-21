<template> 
    <tableAutomatic v-bind="{service,idName,constraint,tableTitle,columns,noColumns}" />
</template>

<script>
  import tableAutomatic from '@/components/tableAutomatic.vue'

export default {
        components:{
            tableAutomatic
        },
        data() {
            return { 
                tableTitle:"Ingreso Mantenimiento",          
                service:'manManten',
                idName:'MAN_MAN_ID',
                noColumns:[], // son las columas que no se quieren mostrar
                columns:[
                 { 
                  key:'MAN_MAN_FECHA_REG',
                  label:'fecha registro'// esta fecha se inseta automáticamente la base de datos o se la envía el back
                  },
                  {
                    key:'MAN_MAN_DESCRIPCION',
                    label:'Descipción'
                    
                  },
                  {
                    key:'MAN_MAN_OBSERVACIONES',
                    label:'Observaciones'
                    
                  },
                  {
                    key:'MAN_MAN_NUMERO',
                    label:'# Mantenimiento'
                    
                  },
                  {
                    key:'MAN_MAN_HOROMETRO_1_INGRESO',
                    label:'Horometro 1'
                    
                  },
                  {
                    key:'MAN_MAN_HOROMETRO_2_INGRESO',
                    label:'Horometro 2'
                    
                  },
                  {
                    key:'MAN_MAN_KILOMETRAJE_INGRESO',
                    label:'Kilometraje ingreso'
                    
                  },
                  {
                    key:'MAN_MAN_HOROMETRO_1_SALIDA',
                    label:'Horometro 1 salida'
                    
                  },
                  {
                    key:'MAN_MAN_HOROMETRO_2_SALIDA',
                    label:'Horometro 2 salida'
                    
                  },
                  {
                    key:'MAN_MAN_KILOMETRAJE_SALIDA',
                    label:'Kilometraje salida'
                    
                  }
                ],
                constraint :[
                  {
                    localReference:'MAN_MAN_ID_ESTADO',
                    reference:'GEN_EST_ID',
                    attributeNameSelect:'GEN_EST_NOMBRE',
                    service:'genEstado/consult/estadoActivo',
                    label:'estado',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },//const service ="GEN_USU_USUARIO"; const tableId ="GEN_USU_ID";
                  {
                    localReference:'MAN_MAN_GEN_USU_ID_REG',
                    reference:'GEN_USU_ID',
                    attributeNameSelect:'GEN_USU_USUARIO',
                    service:'genUsuarios',
                    label:'Usuario',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_MAN_GEN_CSA_ID',
                    reference:'GEN_CSA_ID',
                    attributeNameSelect:'GEN_CSA_NOMBRE',
                    service:'genCasa',
                    label:'Casa Compañía',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_MAN_EQU_ID',
                    reference:'MAN_EQU_ID',
                    attributeNameSelect:'MAN_EQU_NOMBRE_ESP',
                    service:'equipo',
                    label:'Equipo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_MAN_TIPO_MANTENIMIENTO',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['Preventivo','Correctivo'],
                    label:'Tipo mantenimiento',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  // {
                  //   localReference:'MXE_TIPO_MANTENIMIENTO',
                  //   reference:null,
                  //   attributeNameSelect:null,
                  //   service:null,
                  //   data:['P','C'],
                  //   label:'Tipo de manteniemiento',
                  //   // setPositionInTable:3,
                  //   type:'SELECT_EDITABLE',
                  //   nullable:'N'
                  // }
                  ],
            }
        },
    }
</script>