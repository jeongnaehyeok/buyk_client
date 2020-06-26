<template>
  <div class="register-page">
    <progress-bar :progressIndex="progressIndex"/>
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
import ProgressBar from '@/components/registerform/ProgressBar'

export default {
    name:'RegisterPage',
    components:{
      ProgressBar
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
      }
    },
    data(){
      return{
        model: "",
        bike_style: null,
        price: null,
        deal_area: null,
        model_year: null,
        driven_distance: null,
        document_status: null,
        repair_history: "",
        tuning_history: "",
        detail_information: "",
        payment_method: {
          card: false,
          cash: false,
          loan: false,
          trade: false,
          lease: false
        },
        bikeTypes:[
          {
            "name":'네이키드',
            "bike_type":'NK'
          },
          {
            "name":'레플리카',
            "bike_type":'RL'
          },
          {
            "name":'아메리칸',
            "bike_type":'AM'
          },
          {
            "name":'스쿠터',
            "bike_type":'SC'
          },
          {
            "name":'투어링',
            "bike_type":'TL'
          },
          {
            "name":'전기',
            "bike_type":'EL'
          },
          {
            "name":'상업용',
            "bike_type":'CM'
          },
          {
            "name":'ATV',
            "bike_type":'AT'
          },
          {
            "name":'오프로드',
            "bike_type":'OL'
          },
          {
            "name":'포켓,미니',
            "bike_type":'MI'
          }
        ],
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
      border-radius: 5px;
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