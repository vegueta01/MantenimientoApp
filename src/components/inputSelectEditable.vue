<template>
    <div class="mt-3 mb-3">
     <label >{{label}}</label>
     <v-select :options="getatributeList(options)" :value="selected" :type="type" @input="triggerEvent"></v-select>
    </div>
     
</template>

<script>
//   import {mdbInput} from 'mdbvue';

export default {    
  name: 'inputSelectEditable',
  components: {
    //   mdbInput
  },  
  props: {
    value:String,
    label:String,
    type:String,
    options:Array,
    constraints:{},
    referenceId:{}
  },
   methods: {
      triggerEvent(event) { 
          if(event.value === undefined){
              event.value=event.label
          }
          console.log({event});          
        this.$emit('input', event.value);      
      },
      getatributeList(options){
          let lisOption =[];
        // console.log({options});
        // console.log({constraints:this.constraints});
        // console.log({referenceId:this.referenceId});
        

          for (let i = 0; i < options.length; i++) {                     
              if(this.constraints.service){
                let option = {label: `${options[i][this.constraints.attributeNameSelect]}`, value: options[i][this.constraints.reference]};
                lisOption.push(option)
              }else{                  
                  let option = {label: options[i], value: options[i]};
                  lisOption.push(option)                 
              }
              
          }
        // if(! this.referenceId){
        //     this.referenceId = this.value;
        // }
        this.selected={label:this.value,value:this.referenceId}

        // if(this.referenceId){
        //     this.selected={label:this.value,value:this.referenceId}
        // }else{
        //     this.selected={label:'',value:''}
        // }
        
        //   lisOption.push({label:'',value:''})
        //   console.log({lisOption});
          
          return lisOption;
      }
    }
    ,data(){
        return{
            selected:{}
        }
    }
}
</script>

