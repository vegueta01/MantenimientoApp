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
                tableTitle:"Compañia",          
                service:'genCompania',
                idName:'GEN_COM_ID',
                columns:[
                    {
                        key:'GEN_COM_CODIGO',
                        label:'Codigo'
                    },
                    {
                        key:'GEN_COM_NOMBRE',
                        label:'Nombre'
                    },
                    {
                        key:'GEN_COM_NIT',
                        label:'Nit'
                    }
                    
                ],
                // noColumns:['GEN_EST_ID_TABLA',],// son las columas que no se quieren mostrar
                noColumns:[],
                constraint :[
                //     {
                //     localReference:'GEN_EST_TAB_ID',//Gen_est_tab_id
                //     reference:'GEN_TAB_ID',
                //     attributeNameSelect:'GEN_TAB_ID_NOMBRE_REFERENCIA',
                //     service:'genTablas',
                //     label:'Tabla referencia',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   },
                //   {
                //     localReference:'GEN_EST_REG_ACTIVO',
                //     reference:null,
                //     attributeNameSelect:null,
                //     service:null,
                //     data:['0','1'],
                //     label:'Registro activo',
                //     // setPositionInTable:3,
                //     type:'SELECT_EDITABLE',
                //     nullable:'N'
                //   }
                ],
            }
        },
    }
</script>