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
      @onPrice="onPrice"
      @onArea="onArea"
      @onYear="onYear"
      @onDistance="onDistance"
      @onDocument="onDocument"/>
    <repair-form v-show="progressIndex == 4"
      :repair_history="repair_history"
      @onRepair="onRepair"/>
    <tuning-form v-show="progressIndex == 5"
      :tuning_history="tuning_history"
      @onTuning="onTuning"/>
    <detail-form v-show="progressIndex == 6"
      :detail_information="detail_information"
      @onDetail="onDetail"/>
    <div class="progress_btn-contain">
      <button 
        :class="{deactive:(progressIndex < 1) || (progressIndex == 7)}"
        @click="preBtn"
        :disabled="progressIndex == 7">이전</button>
      <button v-if="this.progressIndex < 6"
        :class="{deactive:proDeactive}"
        @click="proBtn"
        :disabled="proDeactive">다음</button>
      <button v-else-if="this.progressIndex == 6"
        :class="{deactive:proDeactive}"
        @click="onSubmit"
        :disabled="proDeactive">제출</button>
      <button v-else
        @click="onFinish">돌아가기</button>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/form/ProgressBar'
import ModelForm from '@/components/form/ModelForm'
import ImageForm from '@/components/form/ImageForm'
import PaymentForm from '@/components/form/PaymentForm'
import BikeBasicForm from '@/components/form/BikeBasicForm'
import RepairForm from '@/components/form/RepairForm'
import TuningForm from '@/components/form/TuningForm'
import DetailForm from '@/components/form/DetailForm'

import api from '@/api'

export default {
    name:'RegisterPage',
    components:{
      ProgressBar,
      ModelForm,
      ImageForm,
      PaymentForm,
      BikeBasicForm,
      RepairForm,
      TuningForm,
      DetailForm
    },
    methods:{
      preBtn(){
        this.progressIndex = this.progressIndex < 1 ? 0 : this.progressIndex-1
        this.checkInput()
      },
      proBtn(){
        this.progressIndex = this.progressIndex > 6 ? 7 : this.progressIndex+1
        this.checkInput()
      },
      checkInput(){
        switch(this.progressIndex){
          case 0:
            this.proDeactive = !!this.model && !!this.bike_style ? false : true
            break
          case 1:
            this.proDeactive = !this.images.length == 0 ? false : true
            break
          case 2:
            this.proDeactive = Object.values(this.payment_method).includes(true) ? false : true
            break
          case 3:
            const checkBool = !!this.price && !!this.deal_area && !!this.model_year && !!this.driven_distance && !!this.document_status
            this.proDeactive = !checkBool
            break
          case 4:
            this.proDeactive = !!this.repair_history ? false : true
            break
          case 5:
            this.proDeactive = !!this.tuning_history ? false : true
            break
          case 6:
            this.proDeactive = this.detail_information.length > 30 ? false : true
            break
        }
      },
      onSubmit(){
        const regitser = {
          model: this.model,
          bike_style: this.bike_style,
          price: this.price,
          deal_area: this.deal_area,
          model_year: this.model_year,
          driven_distance: this.driven_distance,
          document_status: this.document_status,
          repair_history: this.repair_history,
          tuning_history: this.tuning_history,
          detail_information: this.detail_information,
          payment_method: this.payment_method,
        }
        api.post('/api/bikes/create', {...regitser})
          .then(res => {
            const { id } = res.data
            for(let image of this.images){
              const dataForm = new FormData()
              dataForm.append('image', image)
              dataForm.append('bike', id)
              api.post('/api/bikes/image/create', 
                dataForm, 
                { headers:{
                  'Content-Type': 'multipart/form-data'
                }})
                .catch(err => {
                  console.log("이미지 오류");
                })
            }
          })
          .then(()=>{
            this.progressIndex = 7
          })
          .catch(err=>{
            console.log(err);
          })
      },
      onFinish(){
        this.$router.push({ name: 'UserItem'})
      },
      onModel(inputModel){
        this.model = inputModel
        this.checkInput()
      },
      onType(inputType){
        this.bike_style = inputType
        this.checkInput()
      },
      onImage(inputImage){
        this.images = [...inputImage]
        this.checkInput()
      },
      onPayment(inputPayment){
        this.payment_method = {...inputPayment}
        this.checkInput()
      },
      onPrice(inputPrice){
        this.price = inputPrice
        this.checkInput()
      },
      onArea(inputArea){
        this.deal_area = inputArea
        this.checkInput()
      },
      onYear(inputYear){
        this.model_year = inputYear
        this.checkInput()
      },
      onDistance(inputDistance){
        this.driven_distance = inputDistance
        this.checkInput()
      },
      onDocument(inputDocument){
        this.document_status = inputDocument
        this.checkInput()
      },
      onRepair(inputRepair){
        this.repair_history = inputRepair
        this.checkInput()
      },
      onTuning(inputTuning){
        this.tuning_history = inputTuning
        this.checkInput()
      },
      onDetail(inputDetail){
        this.detail_information = inputDetail
        this.checkInput()
      }
    },
    data(){
      return{
        model: "",
        images:[],
        bike_style: '',
        price: 0,
        deal_area: '',
        model_year: 0,
        driven_distance: 0,
        document_status: '',
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
        proDeactive: true,
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
      height: 2.75rem;
      padding: 0 1rem;
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