<template>
  <div class="register-page">
    <progress-bar :progressIndex="progressIndex"/>
    <model-form v-show="progressIndex == 0"
      :model="model"
      :bike_style="bike_style"
      @onModel="onModel"
      @onType="onType"/>
    <image-form v-show="progressIndex == 1"
      :images="images"
      @onImage="onImage"/>
    <payment-form v-show="progressIndex == 2"
      :payment_method="payment_method"
      @onPayment="onPayment"/>
    <bike-basic-form v-show="progressIndex == 3"
      :price="price"
      :deal_area="deal_area"
      :model_year="model_year"
      :driven_distance="driven_distance"
      :document_status="document_status"
      :onPrice="onPrice"
      :onArea="onArea"
      :onYear="onYear"
      :onDistance="onDistance"
      :onDocument="onDocument"/>
    <div class="progress_btn-contain">
      <button 
        :class="{deactive:preAtive}"
        @click="preBtn">이전</button>
      <button v-if="this.progressIndex < 7"
        :class="{deactive:proAtive}"
        @click="proBtn">다음</button>
      <button v-else
        @click="onSubmit">제출</button>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/form/ProgressBar'
import ModelForm from '@/components/form/ModelForm'
import ImageForm from '@/components/form/ImageForm'
import PaymentForm from '@/components/form/PaymentForm'
import BikeBasicForm from '@/components/form/BikeBasicForm'

export default {
    name:'RegisterPage',
    components:{
      ProgressBar,
      ModelForm,
      ImageForm,
      PaymentForm,
      BikeBasicForm
    },
    methods:{
      preBtn(){
        this.progressIndex = this.progressIndex < 1 ? 0 : this.progressIndex-1
        this.checkActive()
      },
      proBtn(){
        this.progressIndex = this.progressIndex > 6 ? 7 : this.progressIndex+1
        this.checkActive()
      },
      checkActive(){
        this.proAtive = this.progressIndex > 6 ? true : false;
        this.preAtive = this.progressIndex < 1 ? true : false;
      },
      onSubmit(){
        console.log("제출");
        console.log("model", this.model);
        console.log("images", this.images);
        console.log("bike_style", this.bike_style);
        console.log("price", this.price);
        console.log("deal_area", this.deal_area);
        console.log("model_year", this.model_year);
        console.log("driven_distance", this.driven_distance);
        console.log("document_status", this.document_status);
        console.log("repair_history", this.repair_history);
        console.log("tuning_history", this.tuning_history);
        console.log("detail_information", this.detail_information);
        console.log("payment_method", this.payment_method);
      },
      onModel(inputModel){
        this.model = inputModel
      },
      onType(inputType){
        this.bike_style = inputType
      },
      onImage(inputImage){
        this.images = [...inputImage]
      },
      onPayment(inputPayment){
        this.payment_method = {...inputPayment}
      },
      onPrice(inputPrice){
        this.price = inputPrice
      },
      onArea(inputArea){
        this.deal_area = inputArea
      },
      onYear(inputYear){
        this.model_year = inputYear
      },
      onDistance(inputDistance){
        this.driven_distance = inputDistance
      },
      onDocument(inputDocument){
        this.document_status = inputDocument
      }
    },
    data(){
      return{
        model: "",
        images:[],
        bike_style: null,
        price: 0,
        deal_area: '',
        model_year: 0,
        driven_distance: 0,
        document_status: null,
        repair_history: "",
        tuning_history: "",
        detail_information: "",
        payment_method: {
          cash: false,
          trade: false,
          loan: false,
          card: false,
          lease: false
        },
        progressIndex:0,
        proAtive: false,
        preAtive: true,
      }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.register-page{
  @include container-max-size;
  @include colum-container;
  .progress_btn-contain{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;
    .deactive{
      background: $gray;
      color: $black;
      &:hover{
          background: $gray;
      }
    }
    button{
      @include outline-none;
      width: 5rem;
      height: 2.75rem;
      border: 0;
      border-radius: 10px;
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      background: $orange;
      font-size: 1.25rem;
      color: $white;
      &:hover{
          background: $dark-orange;
      }
    }
  }
}
</style>