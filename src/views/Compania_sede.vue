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
                tableTitle:"Compañia Sede",          
                service:'genCompaniaSede',
                idName:'GEN_CSE_ID',
                columns:[
                    {
                        key:'GEN_CSE_CODIGO',
                        label:'Codigo'
                    },
                    {
                        key:'GEN_CSE_NOMBRE',
                        label:'Nombre'
                    },
                    // {
                    //     key:'GEN_CSE_SUCURSAL',
                    //     label:'Sucursal'
                    // }
                    
                ],
                // noColumns:['GEN_EST_ID_TABLA',],// son las columas que no se quieren mostrar
                noColumns:[],
                constraint :[
                    {
                    localReference:'GEN_CSE_COM_ID',//Gen_est_tab_id
                    reference:'GEN_COM_ID',
                    attributeNameSelect:'GEN_COM_NOMBRE',
                    service:'genCompania',
                    label:'Compañia',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'GEN_CSE_SUCURSAL',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['0','1'],
                    label:'Sucursal',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  }
                ],
            }
        },
    }
</script>