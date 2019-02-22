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
                tableTitle:"Tareas",          
                service:'manTarea',
                idName:'MAN_TAR_ID',
                noColumns:['MAN_TAR_ID','MAN_TAR_ID_TABLA'], // son las columas que no se quieren mostrar
                columns:[
                //  { 
                //   key:'MAN_MAN_FECHA_REG',
                //   label:'fecha registro'// esta fecha se inseta automáticamente la base de datos o se la envía el back
                //   },
                  {
                    key:'MAN_TAR_REG_ACTIVO',
                    label:'Registro activo'
                    
                  },
                  {
                    key:'MAN_TAR_FECHA_REG',
                    label:'Fecha registro'
                    
                  },
                  {
                    key:'MAN_TAR_DESCRIPCION',
                    label:'Descripción'
                    
                  },
                  {
                    key:'MAN_TAR_OBSERVACIONES',
                    label:'Observaciones'
                    
                  },
                  {
                    key:'MAN_TAR_CODIGO',
                    label:'Codigo tarea'
                    
                  },
                  {
                    key:'MAN_TAR_NOMBRE_ESP',
                    label:'Nombre español'
                    
                  },
                  {
                    key:'MAN_TAR_NOMBRE_ING',
                    label:'Nombre inglés'                    
                  },
                  {
                    key:'MAN_TAR_SERVICIO_ESP',
                    label:'Servicio Español'
                    
                  },
                  {
                    key:'MAN_TAR_SERVICIO_ING',
                    label:'Servicio inglés'
                    
                  },
                  {
                    key:'MAN_TAR_FRECUENCIA',
                    label:'Frecuencia'                    
                  },
                  {
                    key:'MAN_TAR_TIEMPO_REQUERIDO',
                    label:'Tiempo requerido'                    
                  },
                //   {
                //     key:'MAN_EQU_HOROMETRO',
                //     label:'Horometro'
                //   },
                //   {
                //     key:'MAN_EQU_PRO_ID',
                //     label:'Propietario'                    
                //   },
                //   {
                //     key:'MAN_EQU_KILOMETRAJE',
                //     label:'kilometraje'                    
                //   },
                  // {
                  //   key:'MAN_EQU_HOROMETRO',
                  //   label:'Horometro'
                  // }
                    
                ],
                constraint :[
                  {
                    localReference:'MAN_TAR_ID_ESTADO',
                    reference:'GEN_EST_ID',
                    attributeNameSelect:'GEN_EST_NOMBRE',
                    service:'manTarea/consult/estadoActivo',
                    label:'estado',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },//const service ="GEN_USU_USUARIO"; const tableId ="GEN_USU_ID";
                  {
                    localReference:'MAN_TAR_GEN_USU_ID_REG',
                    reference:'GEN_USU_ID',
                    attributeNameSelect:'GEN_USU_USUARIO',
                    service:'genUsuarios',
                    label:'Usuario',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_TAR_GEN_CSA_ID',
                    reference:'GEN_CSA_ID',
                    attributeNameSelect:'GEN_CSA_NOMBRE',
                    service:'companiaSedeArea/?GEN_CSA_CSE_ID=4',
                    label:'Ubicacipon',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_TAR_TEQ_ID',
                    reference:'MAN_TEQ_ID',
                    attributeNameSelect:'MAN_TEQ_NOMBRE',
                    service:'manTipoEquipo',
                    label:'Tipo equipo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MAN_TAR_EQU_ID',
                    reference:'MAN_EQU_ID',
                    attributeNameSelect:'MAN_EQU_NOMBRE_ESP',
                    service:'equipo',
                    label:'Equipo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                //   {
                //     localReference:'MAN_EQU_MLI_ID',
                //     reference:'GEN_MLI_ID',
                //     attributeNameSelect:'GEN_MLI_NOMBRE',
                //     service:'genMarcaLinea',
                //     label:'Linea',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   },
                //   {
                //     localReference:'MAN_EQU_TCO_ID',
                //     reference:'MAN_TCO_ID',
                //     attributeNameSelect:'MAN_TCO_NOMBRE',
                //     service:'getTipoCombustible',
                //     label:'Combustible',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   },
                //   {
                //     localReference:'MAN_EQU_UDM_ID',
                //     reference:'GEN_UDM_ID',
                //     attributeNameSelect:'GEN_UDM_NOMBRE',
                //     service:'genUnidadMedida',
                //     label:'Unidad Medida',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   },
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
                //   {
                //     localReference:'MAN_EQU_MOTORIZADO',
                //     reference:null,
                //     attributeNameSelect:null,
                //     service:null,
                //     data:['1','0'],
                //     label:'Motorizado',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   },
                //   {
                //     localReference:'MAN_EQU_REG_ACTIVO',
                //     reference:null,
                //     attributeNameSelect:null,
                //     service:null,
                //     data:['1','0'],
                //     label:'Activo',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   }
                  ],
            }
        },
    }
</script>