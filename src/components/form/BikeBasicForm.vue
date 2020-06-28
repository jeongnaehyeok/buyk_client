<template>
  <div class="bike-basic-form">
    <h2>바이크의</h2>
    <h2>기본정보를 입력해주세요!</h2>
    <br>
    <p>거래지역을 선택해주세요.</p>
    <select v-model="inputArea">
      <option disabled value="">지역</option>
      <option v-for="area in areaList" 
        :key="area[0]"
        :value="area[0]">{{area[1]}}</option>
    </select>
    <p>연식을 선택해주세요.</p>
    <select v-model="inputyear">
      <option disabled value='0'>연도</option>
      <option v-for="year in yearList" :key="year" :value="year">{{year}}</option>
    </select>
    <p>판매 금액을 입력해주세요.</p>
    <div class="unit_contain">
      <input type="text" v-model="inputPrice">
      <p class="unit_text">만원</p>
    </div>
    <p>서류 3장이 준비 되어있나요??</p>
    <div class="document-contain">
      <div v-for="document in documentList"
        :key="document[0]"
        class="document-box">
        <label :for="document[0]"
          :class="{checkActive:document[2]}">{{ document[1] }}</label>
        <input type="radio" 
          :id="document[0]"
          :value="document[0]"
          v-model="inputDocument"
          @click="onClickDocument"
          hidden>
      </div>
    </div>
    <p>주행거리를 입력해주세요</p>
    <div class="unit_contain">
      <input type="text" v-model="inputDistance">
      <p class="unit_text">Km</p>
    </div>
  </div>
</template>

<script>
import { range, checkPrice } from '@/utils';

export default {
  name:'BikeBasicForm',
  props:{
    price:{
      type:Number
    },
    deal_area:{
      type:String
    },
    model_year:{
      type:Number
    },
    driven_distance:{
      type:Number
    },
    document_status:{
      type:String
    }
  },
  methods:{
    enterPrice(){
      this.togglePrice = false;
    },
    onClickDocument(e){
      const target = e.target.id
      this.documentList.map(v => {
        return v[2] = v[0] == target ? true : false
      })
    }
  },
  watch:{
    inputPrice(){
      const price = Number(this.inputPrice.replace(/[^0-9]/g, ''))
      this.$emit('onPrice', price)
      this.inputPrice = price ? checkPrice(price) : "0"
    },
    inputArea(){
      this.$emit('onArea', this.inputArea);
    },
    inputyear(){
      this.$emit('onYear', this.inputyear)
    },
    inputDistance(){
      const distance = Number(this.inputDistance.replace(/[^0-9]/g, ''))
      this.$emit('onDistance', distance)
      this.inputDistance = distance ? checkPrice(distance) : "0"
    },
    inputDocument(){
      this.$emit('onDocument', this.inputDocument)
    }
  },
  created(){
    this.inputArea = this.deal_area
    this.inputyear = this.model_year
    this.inputPrice = String(this.price)
    this.documentList.map(v => {
      v[2] = v[0] == this.document_status ? true : false
    })
    this.inputDistance = String(this.driven_distance)
  },
  data() {
    return {
      areaList:[
        ['SU', '서울'],
        ['BS', '부산'],
        ['IC', '인천'],
        ['GJ', '광주'],
        ['US', '울산'],
        ['DJ', '대전'],
        ['SJ', '세종'],
        ['DG', '대구'],
        ['GG', '경기'],
        ['GW', '강원'],
        ['GN', '경남'],
        ['GB', '경북'],
        ['CB', '충북'],
        ['CN', '충남'],
        ['JB', '전북'],
        ['JN', '전남'],
        ['JJ', '제주'],
      ],
      inputArea:'',
      yearList:range(1970, 2020),
      inputyear: 0,
      inputPrice: 0,
      documentList:[
        ['U', '준비되지않음', false],
        ['R', '준비됨', false],
        ['N', '없음', false]
      ],
      inputDocument:'',
      inputDistance: 0,
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.bike-basic-form{
  @include register-form-contain;
  p{
    margin: 0.5rem 0;
    font-size:1.5rem
  }
  .unit_contain{
    display: flex;
    input[type="text"]{
      @include outline-none;
      margin-right: 0.5rem;
      padding: 0.25rem 1rem;
      border: 0;
      border-radius: 5px;
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      text-align: right;
      font-size: 1.25rem;
      background: $white;
      &:focus{
        box-shadow: inset 0 0 2px 1px $orange;
      }
    }
    .unit_text{
      font-size: 1.25rem;
    }
  }
  select{
    border: 0;
    border-bottom: 1px solid $black;
    font-size: 1.25rem;
  }
  .document-contain{
    display: flex;
    label{
      @include label-btn;
      width: 10rem;
      margin-right: 1rem;
    }
  }
}
</style>