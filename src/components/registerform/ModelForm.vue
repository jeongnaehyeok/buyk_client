<template>
  <div class="register-form-contain">
    <p>판매하실</p>
    <p>바이크를 입력해주세요.</p>
    <br>
    <input type="text"
      v-model="inputModel"
      placeholder="바이크를 입력해주세요."
      @blur="onModel">
  </div>
</template>

<script>
export default {
  name:'ModelForm',
  props:{
    model:{
      type:String
    }
  },
  methods:{
    onModel(){
      this.$emit('onModel', this.inputModel)
    }
  },
  create(){
    this.inputModel = this.model
  },
  data(){
    return{
      inputModel:''
    }
  }
}
</script>

<style lang="scss">
@import '@/style/registerform.scss';
</style>