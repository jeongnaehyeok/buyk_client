<template>
  <div class="model-form">
    <h2>판매하실</h2>
    <h2>바이크를 입력해주세요.</h2>
    <br>
    <input type="text"
      v-model="inputModel"
      placeholder="바이크를 입력해주세요.">
    <h2>판매하실</h2>
    <h2>바이크를 타입을 선택해주세요.</h2>
    <br>
    <div class="type-contin">
      <div class="type-box"
        v-for="type in bikeTypes"
        :key="type.bike_type"
        :class="{active:type.active}">
        <label :for="type.bike_type">
          <img :src="type.image" :alt="type.bike_type">
          {{type.name}}
        </label>
        <input type="radio" 
          :id="type.bike_type"
          :value="type.bike_type"
          v-model="inputType"
          @click="onClickType"
          hidden>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ModelForm',
  props:{
    model:{
      type:String
    },
    bike_style:{
      type:{
        type:String
      }
    }
  },
  methods:{
    onClickType(e){
      const target = e.target.id
      this.inputType = [...this.bikeTypes].map(v => {
        return v.active = v.bike_type == target ? true : false
      })
    }
  },
  watch:{
    inputModel(){
      this.$emit('onModel', this.inputModel)
    },
    inputType(){
      console.log('hello');
    }
  },
  create(){
    this.inputModel = this.model
    this.bikeTypes = this.bike_style ? [...this.bikeTypes].map(v => {
      return v.active = v.bike_type == this.bike_style ? true : false
    }) : [...this.bikeTypes]
  },
  data(){
    return{
      inputModel:'',
      bikeTypes:[
        {
          "image":'/static/icNaked@2x.png',
          "name":'네이키드',
          "bike_type":'NK',
          "active":false,
        },
        {
          "image":'/static/icReplica@2x.png',
          "name":'레플리카',
          "bike_type":'RL',
          "active":false,
        },
        {
          "image":'/static/icAmerican@2x.png',
          "name":'아메리칸',
          "bike_type":'AM',
          "active":false,
        },
        {
          "image":'static/icScooter@2x.png',
          "name":'스쿠터',
          "bike_type":'SC',
          "active":false,
        },
        {
          "image":'static/icTour@2x.png',
          "name":'투어링',
          "bike_type":'TL',
          "active":false,
        },
        {
          "image":'static/icElec@2x.png',
          "name":'전기',
          "bike_type":'EL',
          "active":false,
        },
        {
          "image":'static/icIndustrial@2x.png',
          "name":'상업용',
          "bike_type":'CM',
          "active":false,
        },
        {
          "image":'static/icAtv@2x.png',
          "name":'ATV',
          "bike_type":'AT',
          "active":false,
        },
        {
          "image":'static/icOffroad@2x.png',
          "name":'오프로드',
          "bike_type":'OL',
          "active":false,
        },
        {
          "image":'static/icMini@2x.png',
          "name":'포켓,미니',
          "bike_type":'MI',
          "active":false,
        }
      ],
      inputType:'',
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.model-form{
  @include register-form-contain;
  input[type=text]{
    width: 100%;
    height: 2.75rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 5px;
    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
    font-size: 1.25rem;
    &:focus{
      outline: none;
      box-shadow: inset 0 0 2px 1px $orange;
    }
  }
  .type-contin{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .type-box{
      flex-basis: 18%;
      margin-bottom: 1rem;
      margin-right: 2.5%;
      padding: 0.25rem;
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      border-radius: 10px;
      background: $gray;
      &:nth-child(5n){
        margin-right: 0;
      }
      &.active{
        box-shadow: inset 0 0 2px 2px $orange;
        color: $orange;
      }
      label{
        @include flex-colum-center;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>