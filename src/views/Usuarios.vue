<template>

<mdb-container class="mt-5">
    
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h4 class="demo-title"><strong>Ingreso a mantenimiento</strong></h4>
    <a href="https://mdbootstrap.com/docs/vue/tables/additional/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
  </mdb-row>
  <hr />
  
 <!-- Table with panel -->
  <div class="card card-cascade narrower">

      <!--Card image-->
      <!-- <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

          <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <i class="fas fa-th-large mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <i class="fas fa-columns mt-0"></i>
              </button>
          </div>

          <a href="" class="white-text mx-3">Ingreso a mantenimiento</a>

          <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <i class="fas fa-pencil-alt mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <i class="fas fa-times mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                  <i class="fas fa-info-circle mt-0"></i>
              </button>
          </div>

      </div> -->
        <!--/Card image-->
        <div class="container mt-3">
       <b-row>
          <b-col>
            <mdb-btn color="primary" @click="showAdd()">Agreagar registro</mdb-btn>
          </b-col>
      <b-col md="6" class="my-1">    
              <mdb-input class="mt-0 mb-3" v-model="filter"  placeholder="Buscar" ariaDescribedBy="button-addon2">
                  <mdb-btn  :disabled="!filter" @click="filter = ''" color="primary" size="md" group slot="append" id="button-addon2">Borrar</mdb-btn>
              </mdb-input>            
        </b-col>
       </b-row>
</div>
      <div class="px-4">

          <div class="table-wrapper">
               <b-table  
               responsive 
              
              hover 
              :items="items"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
               @filtered="onFiltered"              
              >
             <!-- <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
              <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template> -->
              <template slot="editar" slot-scope="row">
                <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              
                <!-- <mdb-icon icon="pencil-alt"  @click.stop="info(row.item, row.index, $event.target)"/> -->
                <mdb-btn tag="a" floating size="sm" @click="showUpdate(row.item, row.index)"><mdb-icon icon="pencil-alt"/></mdb-btn>
                <!-- <b-button size="sm" class="mr-1">
                  Editar
                </b-button> -->
                <!-- <b-button size="sm" @click.stop="row.toggleDetails">
                  {{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} Detalles
                </b-button> -->
            
              </template>
              <template slot="row-details" slot-scope="row">
                <b-card>
                  <ul>
                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
                  </ul>
                </b-card>
              </template>
              </b-table>
                <b-row>
               <b-col md="6" class="my-1">
              <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
            </b-col>
          </b-row>
          </div>

      </div>

  </div>

 <mdb-modal v-if="adding" @close="adding = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Inssertar</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
      <!-- <mdb-input  v-for="field in fields" :key="field.key" :label="field.label" v-model="dataAdd[field.key]" @change="dataAddOnchange" :type="selectTypeField(field.type)" class="mb-5"/>-->
       <!-- <mdb-input  v-for="(data, key) in dataAdd" :key="data.DOCUMENTO" :label="key" v-model="dataAdd[key]" @change="dataAddOnchange" :type="selectTypeField(field.type)" class="mb-5"/>  -->
       <mdb-input  v-for="(value, index) in dataAdd" :key="index" :label="index" v-model="dataAdd[index]" :type="selectTypeAdd(index,dataAdd[index])" class="mb-5"/>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click="save(dataAdd)" color="primary">Guardar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>

  <mdb-modal v-if="editing" @close="editing = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Actualizar {{tableName}}</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
      <mdb-input  v-for="(value, index) in data" :key="index" :label="index" v-model="data[index]" :type="selectTypeUpdate(index,data[index])" class="mb-5"/>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click="updated(data)" color="primary">Actualizar</mdb-btn>
      <mdb-btn @click="deleted(data.DOCUMENTO)" color="danger">Eliminar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>

  <!-- <mdb-btn color="primary" @click.native="showModalMessaje = true">Launch demo modal</mdb-btn> -->
      <mdb-modal  removeBackdrop side position="bottom-right" size="fluid" v-if="showModalMessaje" @close="showModalMessaje = false">
        <mdb-modal-header>
          <mdb-modal-title>Mensaje</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>{{mensssajeModal}}</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModalMessaje = false">ok</mdb-btn>
         
        </mdb-modal-footer>
      </mdb-modal>
</mdb-container>


</template>

<script>
  import {
  //  mdbTbl, mdbTblHead, mdbTblBody, , , ,mdbInput,mdbDatatable 
        mdbBtn,mdbRow,mdbContainer,mdbIcon,mdbInput,
           mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter,mdbModalTitle} from 'mdbvue';
  import config from '../config';
 

export default {
  // name: 'TablePage',
  // data:[],
  components: {
    mdbBtn,
    mdbInput,
    mdbModalTitle,
    // mdbTbl,
    // mdbTblHead,
    // mdbTblBody,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    // mdbInput,
    // mdbDatatable
  }, 
  computed :{
  sortOptions () {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      }
  },
  mounted (){
     this.getData();
  },
  methods: {
    selectTypeField(type){
      if(type === 'VARCHAR2'){      
        return 'text'
      }else if(type  === 'NUMBER'){
        return 'number'
      }else if(type  === 'DATE'){
        return 'datetime-local'
      
      }
    },
    selectTypeUpdate(key,value){
      // buscar que tipo de dat es y si el dato es necesario modificarlo           
      const result = this.fields.filter(field => field.key === key);
      if(result[0].type === 'VARCHAR2'){
        // console.log('es texto');     
        if(value === null){
          console.log({key}); 
            this.data[key] = "";
          }
        return 'text'
      }else if(result[0].type  === 'NUMBER'){
        if(value === null){
          console.log({key}); 
            this.data[key] = "";
          }
        return 'number'
      }else if(result[0].type  === 'DATE'){
        // if(value!== null){
        //   value = new Date(value);
        // }else{
        //    value = new Date();
        // }
        // 
        // return 'time'
        return 'datetime-local'
        // return 'datetime'
      }
      
      
    },
    selectTypeAdd(key,value){
      // buscar que tipo de dat es y si el dato es necesario modificarlo           
      const result = this.fields.filter(field => field.key === key);
      if(result[0].type === 'VARCHAR2'){
        // console.log('es texto');     
        if(value === null){
          console.log({key}); 
            this.dataAdd[key] = "";
          }
        return 'text'
      }else if(result[0].type  === 'NUMBER'){
        if(value === null){
          console.log({key}); 
            this.dataAdd[key] = "";
          }
        return 'number'
      }else if(result[0].type  === 'DATE'){
        // if(value!== null){
        //   value = new Date(value);
        // }else{
        //    value = new Date();
        // }
        // 
        // return 'time'
        return 'datetime-local'
        // return 'datetime'
      }
      
      
    },
    save(data){          
      for (const key in data) {
          if(data[key]===""){
            data[key] = null;
          }
      }
       console.log({data}); 
      this.$http.post(this.config.urlBase+'/'+this.tableName,data,data).then(resp=>{
        console.log({resp});
        this.getData();
        this.adding = false;        
      }).catch(error=>{
        this.showModalMessaje =true;
        this.mensssajeModal = error;
        this.adding=true; 
      });
    },
    updated(data) {
       console.log({data});
       this.editing=false;      
        for (const key in data){
          if(data[key] === ""){
            data[key] = null;
          }
        }       
      this.$http.put(this.config.urlBase+'/'+this.tableName,data)
      .then(resp=>{
        console.log({resp});
        this.getData();
      }).catch(error=>{
        this.showModalMessaje =true;
        this.mensssajeModal = error;
        this.editing=true; 
      });
    },
    deleted(id){
    console.log({id});     
          this.$http.delete(this.config.urlBase+'/'+this.tableName+'/'+id).then(resp=>{
            console.log({resp});
            this.getData();
            this.editing=false;
          },error=>{     
            this.showModalMessaje =true;
            this.mensssajeModal = error;
            this.editing=true;
          });
    },
    dataAddOnchange(evt){
      // console.log({evt});      
    },
    convertValueToCorrecttype(items,fields){
      return new Promise((reject,resolve)=>{
        for (let i = 0; i < items.length; i++) {
          for (const key in items[i]) {
            const result = fields.filter(field => field.key === key)[0];     
              if(result.type === 'DATE'){
                // console.log('date: '+items[i][key]);         
                if(items[i][key] !== null){       
                items[i][key] = items[i][key].substring(0,19);
                }
              }
          }
        }
      });
    },
  getData(){
    
      Promise.all([ 
          this.$http.get(this.config.urlBase+'/'+this.tableName),
        //   this.$http.get(this.config.urlBase+'/equipo')
        ]).then(resp=>{
          console.log({resp:resp[0]});
          let dat = {};
          this.items = resp[0].data.rows;
          this.totalRows = resp[0].data.count;
          // this.fields = Object.assign({}, this.fields , resp[0].data.columns );// resp[0].data.columns;
          this.fields = resp[0].data.columns;
          
          this.fields.filter(field => field.key === 'GEN_USU_ID')[0].label = 'oculto';
          this.fields.filter(field => field.key === 'GEN_USU_USUARIO')[0].label = 'Usuario';
          // let allFields =  resp[0].data.columns;
          this.allFields = Object.assign({}, this.allFields , resp[0].data.columns );
          this.fields.unshift({ key: 'editar', label: 'Editar'});            
          this.convertValueToCorrecttype(this.items,this.fields).then();
      });
      // this.$http.get(this.config.urlBase+'/'+this.tableName).then(resp=>{
   
      // });

      // this.$http.get(this.config.urlBase+'/equipo').then(respEquipo=>{
      //   console.log({respEquipo});
        
      // });

    },onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      
      this.currentPage = 1
    },
    showAdd(){
      console.log('show add');    
       console.log({fields:this.fields});
      for (let i = 0; i < this.fields.length; i++) {
            if(this.fields[i].key !== 'editar'){
                this.dataAdd[this.fields[i].key] = null;
            }
      }
      console.log({dataAdd:this.dataAdd});  
      this.adding = true;
     
      
      // this.dataAdd = this.columns;
    },
    showUpdate (item, index) {
      // console.log({item})
      this.data = item;
      console.log({data:this.data});
      
      this.editing= true;
      // this.modalInfo.title = `Row index: ${index}`
      // this.modalInfo.content = JSON.stringify(item, null, 2)
      // this.$root.$emit('bv::show::modal', 'modalInfo')
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    }
  },
    
  data(){
    return {
      mensssajeModal:"Error:",
      showModalMessaje: false,
      tableName:'usuarios',
      config,
      dataAdd:{},
      data:{nombre:"nombre",apellido:"apellido"},
      login: false,
      editing:false,
      adding:false,
      items:[],
      fields:[],
      currentPage: 1,
      perPage: 5,
      totalRows: 10,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
      allFields:{}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* .fixed-header .table {
	width: auto;
}

.fixed-header thead {
	display: block;
	position: relative;
}

.fixed-header tbody {
	display: block;
	height: 200px;
	overflow-y: scroll;
}

.fixed-column {
	overflow-x: scroll;
	margin-left: 100px;
}

.fixed-column th, .fixed-column td {
	white-space: nowrap;
}

.fixed-column tr th:first-child, .fixed-column tr td:first-child {
	position: absolute;
	width: 100px;
	top: auto;
	margin-left: -100px;
	margin-top: -1px;
} */
</style>

