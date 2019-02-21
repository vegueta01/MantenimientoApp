<template>
    <mdb-input :label="label" :value="value" :type="type" @input="triggerEvent" class="mb-5"/>    
</template>

<script>
  import {mdbInput} from 'mdbvue';

export default {    
  name: 'InputTextMdb',
  components: {
      mdbInput
  },
  
  props: {
    value:String,
    label:String,
    type:String
  },
   methods: {
      triggerEvent(event) { 
        this.$emit('input', event);      
      }
    }
}
</script>


