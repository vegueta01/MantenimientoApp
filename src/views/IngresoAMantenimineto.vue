<template>

<mdb-container class="mt-5">
   
    <!-- <div class="example hoverable"></div> -->
    <!-- <mdb-mask flex-center text="Zoom effect" />s -->
  <!-- <mdb-row class="mt-5 align-items-center justify-content-start ">
    <h4 class="demo-title example hoverable"><strong>Ingreso a mantenimiento</strong></h4>
    <a href="https://mdbootstrap.com/docs/vue/tables/additional/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
  </mdb-row> -->
  <!-- <hr /> -->
  
 <!-- Table with panel -->
  <!-- <div class="card card-cascade narrower"> -->
    <div class="card card-cascade narrower my-5"> 
 <div class="blue-gradient z-depth-2 py-4 mx-4 mb-3 rounded">
   <!-- <p class="text-center white-text mx-3">Mantenimiento</p> -->
    <h4 class="text-center white-text"><strong>Ingreso a mantenimiento</strong></h4>
        <!-- <a href="" class="white-text mx-3">Mantenimiento</a></div> -->
 </div>
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
                  <mdb-btn  :disabled="!filter" @click="filter = ''" color="primary" size="md" group  id="button-addon2">Borrar</mdb-btn>
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
                <b-card >
                  <ul >
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

 <!-- <mdb-modal v-if="adding" @close="adding = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Inssertar</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
       <mdb-input  v-for="(value, index) in dataAdd" :key="index" :label="index" v-model="dataAdd[index]" :type="selectTypeAdd(index,dataAdd[index])" class="mb-5"/>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click="save(dataAdd)" color="primary">Guardar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal> -->

 <mdb-modal v-if="adding" @close="adding = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Inssertar</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text"  >
      <!-- <component :is="mdbBtn" v-for="dateAdd in dataAdd" :key="dateAdd" ></component> -->
       <component v-for="(item, key) in dataAdd" :key="key " 
        v-bind="{
          label:fieldsJson[key].label,
          value:dataAdd[key],
          type:fieldsJson[key].type,
          options: externalItems[fieldsJson[key].label],
          constraints: constraint.filter(con => con.localReference === key)[0]
          }"       
        v-on:input="dataAddOnchange($event,key)"
        v-bind:is="selectInputElement(fieldsJson[key].type)">        
        </component>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click="save(dataAdd)" color="primary">Guardar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>


  <mdb-modal v-if="editing" @close="editing = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Actualizar</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
      <!-- <mdb-input  v-for="(item, key) in dataUpdate" :key="key" :label="key" v-model="dataUpdate[key]" :type="selectTypeUpdate(key,data[key])" class="mb-5"/> -->
    <component v-for="(item, key) in dataUpdate" :key="key"  @input="updateChangeInput"
        v-bind="{
          label:fieldsJson[key].label,
          value:dataUpdate[key],
          type:fieldsJson[key].type,
          options: externalItems[fieldsJson[key].label],
          referenceId:selectReferenceId(key),//buscar la posición de el registro y envialo
          constraints: constraint.filter(con => con.localReference === key)[0]
          }"       
        v-on:input="dataSaveOnchange($event,key)"
        v-bind:is="selectInputElement(fieldsJson[key].type)">        
      </component>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click="updated(dataUpdate)" color="primary" :class="animate">Actualizar</mdb-btn>
      <mdb-btn @click="deleted()" color="danger">Eliminar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
  <!-- <mdb-modal v-if="editing" @close="editing = false">
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
  </mdb-modal> -->

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
           mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter,mdbModalTitle,
           mdbCard,mdbCardBody,mdbCardTitle,mdbCardText,mdbCardUp,mdbView,ViewWrapper} from 'mdbvue';

  import config from '../config';
//  import Vue from 'vue';
  import InputTextMdb from '@/components/InputTextMdb.vue'
  import inputSelectEditable from '@/components/inputSelectEditable.vue'
  import datePicker from '@/components/datePicker.vue'
// Vue.component('some-other-component', {
//   template: `<p>felipe</p>`
// });


export default {
  // name: 'TablePage',
  // data:[],
  components: {   
    datePicker,
    InputTextMdb,
    inputSelectEditable,
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
    mdbCard,mdbCardBody,mdbCardTitle,mdbCardText,mdbCardUp,mdbView,ViewWrapper
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
     this.getData().then(); //pasar esta función a computed
  },
  methods: {
    
    updateChangeInput(changeInput){
       
      this.animateIndexAux++;
      // console.log({animateIndexAux:this.animateIndexAux});
      
      // console.log({fields:this.fields.length});
      // console.log({changeInput}); 
      // this.fields.length;
      if(this.animateIndexAux > this.countComponents){
        this.animate ='animated bounce infinite';
          console.log({changeInput}); 
      }
    },
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
      console.log({key});
      
      console.log('fieldsJson '+this.fieldsJson[key]);
      // console.log(this.fieldsJson[key].label);
      
      // buscar que tipo de dat es y si el dato es necesario modificarlo           
      const result = this.fields.filter(field => field.key === key);
      console.log({result});
      
      if(result[0]!==undefined){        
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
        }else if(result[0].type  === 'SELECT'){      
          return 'text'         
        }
      }
      
    },
    selectTypeAdd(key,type){
      // console.log('select type');
      
      // buscar que tipo de dat es y si el dato es necesario modificarlo           
      // const result = this.fields.filter(field => field.key === key);
      // console.log({result});
      // console.log({type});
      // console.log({key});
      
      if(type!==undefined){ 
        if(type === 'VARCHAR2'){    
          if(this.dataAdd[key] === null){
              this.dataAdd[key] = "";
            }
          return 'text'
        }else if(type  === 'NUMBER'){
          if(this.dataAdd[key] === null){
              this.dataAdd[key] = "";
            }
          return 'number'
        }else if(type  === 'DATE'){
          this.dataAdd[key] = new Date().toISOString().substring(0,19);          
          return 'datetime-local'         
        }else if(type  === 'CHAR'){
          if(this.dataAdd[key] === null){
              this.dataAdd[key] = "";
            }
          return 'text';
        }
      }else{
        return 'text'
      }
      
    },
    save(data){  
      console.log({data});       
      // los datos de dataAddAdicional son campos de llaves foraneas
      // si la tabla no tiene llaves foraneas entoces no se añaden más campos
      // this.dataAddAdicional se llena automática mente con el método dataAddOnchange()
      // las configuraciones de las llaves foraneas se ponen en la variable constraint
      let insetData = Object.assign({}, insetData , data ); 
      this.adding=false; 
       for (const key in this.dataAddAdicional) {
          insetData[key] = this.dataAddAdicional[key];
       }       
      for (const key in insetData) {
          if(insetData[key]===""){
            insetData[key] = null;
          }
      }      
       
      //  this.adding=true; 
      
       console.log({insetData}); 
      this.$http.post(this.config.urlBase+'/'+this.tableName,insetData).then(resp=>{
        console.log({resp});
        this.getData();
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
      let insetData = Object.assign({}, insetData , data ); 
      this.adding=false; 
       for (const key in this.dataAddAdicional) {
          insetData[key] = this.dataAddAdicional[key];
       }       
      for (const key in insetData) {
          if(insetData[key]===""){
            insetData[key] = null;
          }
      }
      
      //  currentPage: 1,
      // perPage: 5,
      insetData[this.idName] = this.items[this.indexTableUbdateSelected][this.idName];
      console.log({insetData});     
      this.$http.put(this.config.urlBase+'/'+this.tableName,insetData)
      .then(resp=>{
        console.log({resp});
        this.getData();
      }).catch(error=>{
        this.showModalMessaje =true;
        this.mensssajeModal = error;
        this.editing=true; 
      });
    },
    deleted(){
      let id = this.items[this.indexTableUbdateSelected][this.idName]
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
   
    // convertValueToCorrecttype:async function (items,fields){
    //   // return new Promise((reject,resolve)=>{
    //     for (let i = 0; i < items.length; i++) {
    //       for (const key in items[i]) {
    //         const result = fields.filter(field => field.key === key)[0]; 
    //           // if(key==='MXE_CODIGO_EQUIPO'){
    //             // for (let i = 0; i < this.itemsEquipos.length; i++) {
    //             //   itemsEquipos[i];            
    //             // }
    //             // items[i][key]
               
    //           // }
    //           if(result!== undefined){
    //             if(result.type === 'datetime-local'){
    //               // console.log('date: '+items[i][key]);         
    //               if(items[i][key] !== null){       
    //                 items[i][key] = new Date(items[i][key])
    //               // items[i][key] = items[i][key].substring(0,19);
    //               }
    //             }
    //           }
    //       }
    //     }
 
    //     return true;
    //   // });
    // },
    getPromise(service){
      return new Promise((resolve,reject)=>{
        resolve(this.$http.get(this.config.urlBase+'/'+service));
      });
    },
    getPromisesConstraint(constraint){
      let promises = [];
      for (let k = 0; k < constraint.length; k++){
        this.getPromise(constraint[k].service);
        //  promises.push(this.$http.get(this.config.urlBase+'/'+constraint[k].service));      
      }
      return promises;
    },
    //  getData(){
    //   let constraint = [{
    //                 localReference:'MXE_CODIGO_EQUIPO',
    //                 reference:'EQU_CODIGO',
    //                 attributeNameSelect:'EQU_NOMBRE',
    //                 service:'equipo',
    //                 label:'equipo'
    //                 }];
    //   let promises = this.getPromisesConstraint(constraint);
    //   // for (let i = 0; i < this.items.length; i++) {            
    //   //     // this.getPromisesConstraint(constraint);            
    //   // } 
    //   promises.unshift(this.$http.get(this.config.urlBase+'/'+this.tableName));
    // // return new Promise((resolve,reject)=>{
    //   Promise.all([promises]).then(resp=>{
    //       console.log({resp});
    //       let dat = {};
    //       this.items = resp[0].data.rows;
     

    //       this.totalRows = resp[0].data.count;
    //       // this.fields = Object.assign({}, this.fields , resp[0].data.columns );// resp[0].data.columns;
    //       this.fields = resp[0].data.columns;
    //       // this.fields = this.fields.filter(field => field.key !== 'MXE_ID_TABLA');
    //       // let allFields =  resp[0].data.columns;
    //       // this.allFields = Object.assign({}, this.allFields , resp[0].data.columns );
    //       this.fields.unshift({ key: 'equipo', label: 'equipo',field: "equipo"});
    //       this.fields.unshift({ key: 'editar', label: 'Editar'}); 
    //       this.convertValueToCorrecttype(this.items,this.fields).then(()=>{
     
          
    //       this.items[0].equipo ='felipe';
    //       this.items[1].equipo ='felipe';
    //       console.log(this.items);
    //     //  this.items[0].MXE_CODIGO_EQUIPO ='felipe';
        
    //       this.itemsEquipos = resp[1].data.rows;
    //       this.fieldsEquipos = resp[1].data.columns;
    //       resolve(true);
    //       });
         
    //   });
    //   // this.$http.get(this.config.urlBase+'/'+this.tableName).then(resp=>{
   
    //   // });

    //   // this.$http.get(this.config.urlBase+'/equipo').then(respEquipo=>{
    //   //   console.log({respEquipo});
        
    //   // });
    // // });
    // },
    ///////////////////////////////
  getData: async function(){    
    // return new Promise((resolve,reject)=>{
      let resp = await Promise.all([ 
          this.$http.get(this.config.urlBase+'/'+this.tableName),
      
        ])
  
      console.log({resp});
          let dat = {};

          // let originals = Object.assign({},originals,resp[0].data.rows);

          // this.originalsItems = originals;
          
          this.items = resp[0].data.rows;

          
          // let constraint = 
          // {
          //   MXE_CODIGO_EQUIPO:{
          //         reference:'EQU_CODIGO',
          //         attributeNameSelect:'EQU_NOMBRE',
          //         service:'equipo',
          //         label:'Equipo',
          //         setPositionInTable:3,
          //         type:'SELECT_EDITABLE'
          //   }
          //   };
          await this.getNameOfForeinKey(this.constraint);

          this.totalRows = resp[0].data.count;
          // this.fields = Object.assign({}, this.fields , resp[0].data.columns );// resp[0].data.columns;
         
          this.fields = resp[0].data.columns;
          // this.fields =Object.assign({}, this.fields , resp[0].data.rows);
         
          // this.fields = this.fields.filter(field => field.key !== 'MXE_ID_TABLA');
          // let allFields =  resp[0].data.columns;
          
          // this.fields.unshift({ key: 'equipo', label: 'equipo',field: "equipo"});
          // this.fields.filter(filt=>filt.key === 'MXE_ESTADO')[0].label = 'Estado';
          // this.fields.filter(filt=>filt.key === 'MXE_ESTADO')[0].key = 'Estado';
          console.log({fields:this.fields});
          
          for (let i = 0; i < this.constraint.length; i++) {
          // this.fields.unshift({ key: constraint[i].label, label:constraint[i].label});    
            if(this.constraint[i].service) {
              // console.log('index = '+this.fields.findIndex(fiel=>fiel.key === this.constraint[i].localReference));
              let index = this.fields.findIndex(fiel=>fiel.key === this.constraint[i].localReference);
              this.fields[index].label = this.constraint[i].label;
              // this.fields[index].key = this.constraint[i].localReference;
              this.fields[index].type = this.constraint[i].type;
              // this.fields.splice(this.constraint[i].setPositionInTable, 0, { key: this.constraint[i].localReference, label:this.constraint[i].label,type:this.constraint[i].type,nullable:this.constraint[i].nullable});  
            }
            else{ // unir el campo del contrain con el campo correcto en la tabla
              let index = this.fields.findIndex(fiel=>fiel.key === this.constraint[i].localReference);
              this.fields[index].label = this.constraint[i].label;
              this.fields[index].key = this.constraint[i].localReference;
              this.fields[index].type = this.constraint[i].type;
              // this.fields.splice(this.constraint[i].setPositionInTable, 0, { key: this.constraint[i].label, label:this.constraint[i].label,type:this.constraint[i].type,nullable:this.constraint[i].nullable});  
             
             // this.fields.filter(filt=>filt.key === this.constraint[i].localReference)[0].label = this.constraint[i].label;
              // this.fields.filter(filt=>filt.key === this.constraint[i].localReference)[0].key = this.constraint[i].label;
              // this.fields.filter(filt=>filt.key === this.constraint[i].localReference)[0].type = this.constraint[i].type;
            }
          }
          // for (const key in constraint) {
          //   this.fields.splice(constraint[key].setPositionInTable, 0, { key: constraint[key].label, label:constraint[key].label,type:constraint[key].type});                 
          // }
          this.fields.unshift({ key: 'editar', label: 'Editar'}); 
          this.fields = this.fields.filter(field => field.key !== this.idName);
          // this.fields = this.fields.filter(field => field.key !== 'MXE_CODIGO_EQUIPO');
          // delete this.fields[1];
          for (let i = 0; i < this.fields.length; i++) {            
            this.addInputType(this.fields[i]);          
          }

          await this.setfieldsJson(this.fields);
          // this.fieldsJson.MXE_ESTADO.label ='Estado';
          console.log({fieldsJson:this.fieldsJson});
          
          // await this.convertValueToCorrecttype(this.items,this.fields);

          
          
          
          //  for (let i = 0; i < resp[0].data.rows.length; i++) {            
                       
          // }
                   
          // this.items[0].equipo ='felipe';
          // this.items[1].equipo ='felipe';
          console.log(this.items);
          return true;
        //  this.items[0].MXE_CODIGO_EQUIPO ='felipe';
        
          // this.itemsEquipos = resp[1].data.rows;
          // this.fieldsEquipos = resp[1].data.columns;
      // this.$http.get(this.config.urlBase+'/'+this.tableName).then(resp=>{
   
      // });

      // this.$http.get(this.config.urlBase+'/equipo').then(respEquipo=>{
      //   console.log({respEquipo});
        
      // });
    // });
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      
      this.currentPage = 1
    },
    showAdd(){
      // console.log('show add');      
      // console.log({dataAdd:this.dataAdd});  
      
      if(this.fields.length > 0){ 
        this.dataAddAdicional={};   
        for (let i = 0; i < this.fields.length; i++) {   
            if(this.fields[i].key !== 'editar'){
                if(this.fields[i].type === 'datetime-local'){
                  this.dataAdd[this.fields[i].key] = new Date();  
                }else{
                  this.dataAdd[this.fields[i].key] = '';   
                }                
            }
        }   
        this.adding = true;      
        // console.log({dataAdd:this.dataAdd});
                 
      }else{
        this.showModalMessaje =true;
        this.mensssajeModal = `error: no se tiene acceso al servidor`;
      }

     
      
      // this.dataAdd = this.columns;
    },
    showUpdate (item, index) {
      // console.log({referencesIds:this.referencesIds});
      // console.log({items:this.items});
      // console.log({item})
      // this.data = item;
      // console.log({data:this.data});


      // if(this.fields.length > 0){   
      //   this.dataUpdateAdicional={};      
        // this.editing= true;   
      // }else{
      //   this.showModalMessaje =true;
      //   this.mensssajeModal = `error: no se tiene acceso al servidor`;
      // }


      // this.modalInfo.title = `Row index: ${index}`
      // this.modalInfo.content = JSON.stringify(item, null, 2)
      // this.$root.$emit('bv::show::modal', 'modalInfo')

      // console.log({item});
      // console.log({index});
      // console.log({fieldsJson:this.fieldsJson});


      // console.log({index});
      // console.log({currentPage:this.currentPage});
      // console.log({perPage:this.perPage});
      
      
      this.animate = '';
      this.animateIndexAux=0;
      this.countComponents=0;
      // let countComponentsFunction=()=>{
        // cuenta los componentes que se van a mostrar en la lista de edición
        for (let i = 0; i < this.fields.length; i++) {         
              if(this.fields[i].type === 'SELECT_EDITABLE'){
                  this.countComponents++;                
              }else if(this.fields[i].type === 'datetime-local'){
                  this.countComponents++;                 
              }               
        }
        console.log({countComponents:this.countComponents});
        
      // }
      this.indexTableUbdateSelected = ((this.currentPage-1)*this.perPage)+index;

      // console.log({indexTableUbdateSelected:this.indexTableUbdateSelected});
      
      for (const key in this.fieldsJson) {
          if(key !== 'editar'){            
            if(item[key]!== null){
              this.dataUpdate[key] = item[key]+'';
            }else{
              this.dataUpdate[key]='';
            }
            // const i = this.constraint.findIndex(resp=>resp.localReference === key);
            // if(i !== -1){
            //   if(this.constraint[i].service){                 
            //     console.log('llave foranea = '+this.referencesIds[index][this.constraint[i].localReference]);                 
            //   }
                      
            // }
          }
      }
      // console.log({dataUpdate:this.dataUpdate});
      
      this.editing= true;   
      // if(this.fields.length > 0){
      //   this.dataAddAdicional={};   
      //   for (let i = 0; i < this.fields.length; i++) {   
      //       if(this.fields[i].key !== 'editar'){
      //           this.dataAdd[this.fields[i].key] = '';                 
      //       }
      //   }   
      //   this.adding = true;               
      // }else{
      //   this.showModalMessaje =true;
      //   this.mensssajeModal = `error: no se tiene acceso al servidor`;
      // }
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    /**
     * recibe una estructura json que contiene la configuración de 
     * llaves foraneas de esta tabla
     * con esa estructura llama a un servicio definido en el bakend
     * y guarda esos doatos en la variable externalItems
     * en un json cuya clave es tiene el mismo nombre de el label
     * de donde se llamaron los datos externos
     * además crea un campo en la tabla mostrada y le añade un campo
     * con el label definido por las configuraciones, además inserta los 
     * datos del campo seleccionado en los datos externos,
     * además compara los las llaves foraneas y pone en su correcta  ubicación 
     * el nombre del campo deseado en la tabla mostrada.
     * ejemplo de una configuración:
     *    let constraint = [{
                  localReference:'MXE_CODIGO_EQUIPO' //atributo local del id foraneo
                  reference:'EQU_CODIGO',           //atributo del id de la tabla foranea
                  attributeNameSelect:'EQU_NOMBRE', //atributo de la tabbla foranea que queremos reemplazar
                  service:'equipo',                 //servicio al que queremos llamar ejemplo localhost:3000/nombreDelServicio
                  label:'Equipo',                   //nombre del label que le ponemos poner en la tabla
                  setPositionInTable:3,             //posición en donde queremos ponerlo en la tabla
                  type:'SELECT_EDITABLE'            //tipos disponibles 'SELECT_EDITABLE', 'SELECT','DATE_PIKER'
                  nullable:'N'                      //si el dato puede ser nulo entonce 'Y' si no es nulo entonce 'N'
            },{...}
            ];
     */
    getNameOfForeinKey:async function(constraint){ 
      for (let i = 0; i < this.items.length; i++) {
        this.referencesIds[i]={};
      }
    // este código sirve para la configuración de contraint por array
    for (let k = 0; k < constraint.length; k++) { 
        // console.log('url '+this.config.urlBase+'/'+constraint[k].service);  
        if(constraint[k].service){       
            let resp = await this.$http.get(this.config.urlBase+'/'+constraint[k].service);
            this.externalItems[constraint[k].label] = resp.data.rows;
            // console.log('service'+constraint[k].service);     
          for (let i = 0; i < this.items.length; i++) {
            
            for (let j = 0; j < resp.data.rows.length; j++) {
                  if(resp.data.rows[j][constraint[k].reference] === this.items[i][constraint[k].localReference]){               
                    // this.items[i][constraint[k].label] = resp.data.rows[j][constraint[k].attributeNameSelect];
                    this.referencesIds[i][constraint[k].localReference] =  resp.data.rows[j][constraint[k].reference]
                    this.items[i][constraint[k].localReference] = resp.data.rows[j][constraint[k].attributeNameSelect];
                    break;
                  }
                }  
            // let result = this.resp.filter(res => res[constraint[k].reference] === this.items[i][constraint[k].localReference]);
                    
          }
          // return true;
      }else{
        // for (let i = 0; i < this.items.length; i++) {
        //   this.items[i][constraint[k].label] = this.items[i][constraint[k].localReference];         
        // }
         if(constraint[k].data){
              this.externalItems[constraint[k].label] = constraint[k].data;
          }else{
            console.log(constraint[k].label+' no tiene la configuración data');
            
          }
      }
      }
    //// ---------------- hasta aqui------
    // este código es para la nueva configuración de la configuracion contrain por JSON
  
      // for (const keyConstrain in constraint) {    
      // let resp = await this.$http.get(this.config.urlBase+'/'+constraint[keyConstrain].service);
      //   console.log('service'+constraint[keyConstrain].service);     
      // for (let i = 0; i < this.items.length; i++) {
      //   for (let j = 0; j < resp.data.rows.length; j++) {
      //         if(resp.data.rows[j][constraint[keyConstrain].reference] === this.items[i][keyConstrain]){  
      //           // console.log('encontrado');                             
      //           this.items[i][constraint[keyConstrain].label] = resp.data.rows[j][constraint[keyConstrain].attributeNameSelect];
      //           break;
      //         }
      //       }           
      //   }
      // }
        console.log('proceso de busqueda de contraints completo');
        
        return true;
        // resolve(true);
    // });
    
  },
  dataSaveOnchange(value,key){
    // busca si el dato que llega 
    // si en los label de los constraint tiene la misma llave que llega
    // quiere decir que el dato que llegó está referenciado con otra tabla
    // entonces busca en las configuraciones la llave localReference 
    // localReference hace referencia a el campo que contendría el id de la tabla referenciada,
    // en los parametros value llega un array con la siguiente estrctura value :{label,value}
    // en el campo value.value contiene la llave foranea de la tabla referenciada
   
    const isConstraint = this.constraint.filter(resp => resp.localReference === key)
    
    // si isConstraint.length > 0 quiere decir que el dato que llega hace referencia a una llave foranea
    // entonces los datos que llegan se insertan en la variable dataAddAdicional que serán insertados luego en la función save()
    if(isConstraint.length > 0){
      //  this.dataAdd[isConstraint[0].localReference] = value.value;
      this.dataAddAdicional[isConstraint[0].localReference] = value;
    }else{
    // si  (! isConstraint.length > 0 )  quiere decir que el dato que llega hace referenia a un campo
    // que no tiene llave foranea, por lo tanto se reemplaza el valor que llega con esa misma llave 
      this.dataUpdate[key]=value;
    }

  
  },
  dataAddOnchange(value,key){
    // busca si el dato que llega 
    // si en los label de los constraint tiene la misma llave que llega
    // quiere decir que el dato que llegó está referenciado con otra tabla
    // entonces busca en las configuraciones la llave localReference 
    // localReference hace referencia a el campo que contendría el id de la tabla referenciada,
    // en los parametros value llega un array con la siguiente estrctura value :{label,value}
    // en el campo value.value contiene la llave foranea de la tabla referenciada
   
    const isConstraint = this.constraint.filter(resp => resp.localReference === key);
  
    // console.log({value});
    // console.log({key});
    // console.log({isConstraint});   
    
    // si isConstraint.length > 0 quiere decir que el dato que llega hace referencia a una llave foranea
    // entonces los datos que llegan se insertan en la variable dataAddAdicional que serán insertados luego en la función save()
    if(isConstraint.length > 0){
      //  this.dataAdd[isConstraint[0].localReference] = value.value;
      this.dataAddAdicional[isConstraint[0].localReference] = value;
    }else{
    // si  (! isConstraint.length > 0 )  quiere decir que el dato que llega hace referenia a un campo
    // que no tiene llave foranea, por lo tanto se reemplaza el valor que llega con esa misma llave 
      this.dataAdd[key]=value;
    }
  
  },
  selectInputElement(type){
    
    console.log({type});   
    // console.log({InputTextMdb:this.InputTextMdb});
    let InputTextMdb = this.InputTextMdb;
    // console.log({type});
    
    if(type === 'text'){
        return this.InputTextMdb;
    }else if(type === 'SELECT_EDITABLE'){
        // this.countComponents++;
        return this.inputSelectEditable;
    }else if(type === 'datetime-local'){
        // this.countComponents++;
        return this.datePicker;
    }else{
       return this.InputTextMdb;
    }
  },
  setfieldsJson(fields){
    for (let i = 0; i < fields.length; i++) {
      this.fieldsJson[fields[i].key] = {
        label:fields[i].label,
        nullable:fields[i].nullable,
        type:fields[i].type
      };
      
    }
  },
  addInputType(field){
    if(field.type === 'VARCHAR2'){
      field.type = 'text'
    }else if(field.type === 'NUMBER'){
      field.type = 'number'
    }else if(field.type   === 'DATE'){
      field.formatter=(value, key, item) => {
              if(value){
                return new Date(value).toLocaleString() 
              }else{
                return '';
              }
            }       
      field.type = 'datetime-local'         
    }else if(field.type   === 'CHAR'){
      field.type = 'text';
    }
  },
  selectReferenceId(key){

    if(this.referencesIds[this.indexTableUbdateSelected]){
      return this.referencesIds[this.indexTableUbdateSelected][key]
    }else{
      return null
    }  
  }

  },
    
  data(){
    return {
      mensssajeModal:"Error:",
      showModalMessaje: false,
      tableName:'ingresoAManteminiento',
      idName:'MXE_ID_TABLA',
      config,
      dataAdd:{},
      dataAddAdicional:{},
      dataUpdate:{},
      dataUpdateAdicional:{},
      data:{nombre:"nombre",apellido:"apellido"},
      login: false,
      editing:false,
      adding:false,

      items:[],    
      fields:[],
      fieldsJson:{},// esta varaible contiene los mismos datos que en la variable fields con la diferencia de que es un json que tiene como clave la llave de la tabla para reducir el procesamiento

      itemsEquipos:[],
      fieldsEquipos:[],
      
      constraint :[{
                    localReference:'MXE_CODIGO_EQUIPO',
                    reference:'EQU_CODIGO',
                    attributeNameSelect:'EQU_NOMBRE',
                    service:'equipo',
                    label:'Equipo',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MXE_ID_USUARIO_CREACION',
                    reference:'USU_ID_TABLA',
                    attributeNameSelect:'USU_NOMBRE',
                    service:'USERS',
                    label:'Usuario creación',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MXE_ID_USUARIO_CIERRE',
                    reference:'USU_ID_TABLA',
                    attributeNameSelect:'USU_NOMBRE',
                    service:'USERS',
                    label:'Usuario cierre',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MXE_ESTADO',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['PEN','OK','ANU'],
                    label:'Estado',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  },
                  {
                    localReference:'MXE_TIPO_MANTENIMIENTO',
                    reference:null,
                    attributeNameSelect:null,
                    service:null,
                    data:['P','C'],
                    label:'Tipo de manteniemiento',
                    // setPositionInTable:3,
                    type:'SELECT_EDITABLE',
                    nullable:'N'
                  }
                  ],
      currentPage: 1,
      perPage: 6,
      totalRows: 10,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
      referencesIds:[],
      selected:'',
      externalItems:{},
      InputTextMdb,
      inputSelectEditable,
      datePicker,
      animate:'',//animated bounce infinite
      animateIndexAux:0,
      countComponents:0,
      indexTableUbdateSelected:0
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

