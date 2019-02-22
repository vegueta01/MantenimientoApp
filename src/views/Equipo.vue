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
                tableTitle:"Equipo",          
                service:'equipo',
                idName:'MAN_EQU_ID',
                noColumns:['MAN_EQU_ID','MAN_EQU_ID_TABLA'], // son las columas que no se quieren mostrar
                columns:[
                //  { 
                //   key:'MAN_MAN_FECHA_REG',
                //   label:'fecha registro'// esta fecha se inseta automáticamente la base de datos o se la envía el back
                //   },
                  {
                    key:'MAN_EQU_DESCRIPCION',
                    label:'Descipción'
                    
                  },
                  {
                    key:'MAN_EQU_OBSERVACIONES',
                    label:'Observaciones'
                    
                  },
                  {
                    key:'MAN_EQU_CODIGO',
                    label:'Código equipo'
                    
                  },
                  {
                    key:'MAN_EQU_NOMBRE_ESP',
                    label:'Nombre español'
                    
                  },
                  {
                    key:'MAN_EQU_NOMBRE_ING',
                    label:'Nombre inglés'
                    
                  },
                  {
                    key:'MAN_EQU_SERIAL_INTERNO',
                    label:'Serial interno'
                    
                  },
                  {
                    key:'MAN_EQU_SERIAL_CHASIS',
                    label:'Serial chasis'                    
                  },
                  {
                    key:'MAN_EQU_SERIAL_MOTOR',
                    label:'Serial motor'
                    
                  },
                  {
                    key:'MAN_EQU_MODELO',
                    label:'Modelo'
                    
                  },
                  {
                    key:'MAN_EQU_CAPCIDAD_TANQUE',
                    label:'Capacidad tanque'                    
                  },
                  {
                    key:'MAN_EQU_COMBUSTIBLE_ACTUAL',
                    label:'Combustible actual'                    
                  },
                  {
                    key:'MAN_EQU_HOROMETRO',
                    label:'Horometro'
                  },
                  {
                    key:'MAN_EQU_PRO_ID',
                    label:'Propietario'                    
                  },
                  {
                    key:'MAN_EQU_KILOMETRAJE',
                    label:'kilometraje'                    
                  },
                  // {
                  //   key:'MAN_EQU_HOROMETRO',
                  //   label:'Horometro'
                  // }
                    
                ],
                constraint :[
                  {
                    localReference:'MAN_EQU_ID_ESTADO',
                    reference:'GEN_EST_ID',
                    attributeNameSelect:'GEN_EST_NOMBRE',
                    service:'equipo/consult/estadoActivo',
                    label:'estado',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },//const service ="GEN_USU_USUARIO"; const tableId ="GEN_USU_ID";
                  {
                    localReference:'MAN_EQU_GEN_CSA_ID',
                    reference:'GEN_CSA_ID',
                    attributeNameSelect:'GEN_CSA_NOMBRE',
                    service:'companiaSedeArea/?GEN_CSA_CSE_ID=4',
                    label:'Ubicacipon',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_TEQ_ID',
                    reference:'MAN_TEQ_ID',
                    attributeNameSelect:'MAN_TEQ_NOMBRE',
                    service:'manTipoEquipo',
                    label:'Tipo equipo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_MAR_ID',
                    reference:'GEN_MAR_ID',
                    attributeNameSelect:'GEN_MAR_NOMBRE',
                    service:'genMarca',
                    label:'Marca',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_MLI_ID',
                    reference:'GEN_MLI_ID',
                    attributeNameSelect:'GEN_MLI_NOMBRE',
                    service:'genMarcaLinea',
                    label:'Linea',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_TCO_ID',
                    reference:'MAN_TCO_ID',
                    attributeNameSelect:'MAN_TCO_NOMBRE',
                    service:'getTipoCombustible',
                    label:'Combustible',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_UDM_ID',
                    reference:'GEN_UDM_ID',
                    attributeNameSelect:'GEN_UDM_NOMBRE',
                    service:'genUnidadMedida',
                    label:'Unidad Medida',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  // {
                  //   localReference:'MAN_EQU_PRO_ID',
                  //   reference:'MAN_TCO_ID',
                  //   attributeNameSelect:'MAN_TCO_NOMBRE',
                  //   service:'getTipoCombustible',
                  //   label:'Combustible',
                  //   // setPositionInTable:3,
                  //   type:'SELECT_EDITABLE',
                  //   nullable:'N'
                  // },
                  // 
                  {
                    localReference:'MAN_EQU_MOTORIZADO',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['1','0'],
                    label:'Motorizado',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_EQU_REG_ACTIVO',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['1','0'],
                    label:'Activo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  }
                  ],
            }
        },
    }
</script>