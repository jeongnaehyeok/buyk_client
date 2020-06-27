<template>
  <div class="payment-form">
    <h2>원하시는</h2>
    <h2>거래방법을 골라주세요.</h2>
    <br>
    <div class="check_box-contain">
      <div class="check_box-box">
        <label for="cash"
          :class="{checkActive:inputpayment['cash']}"
          @click="checktest"
          id="cash">현금</label>
        <input type="checkbox"
          :value="inputpayment['cash']" 
          :checked="inputpayment['cash']"
          v-model="inputpayment['cash']"
          id="cash"
          hidden>
      </div>
      <div class="check_box-box">
        <label for="trade"
          :class="{checkActive:inputpayment['trade']}"
          @click="checktest"
          id="trade">대차</label>
        <input type="checkbox"
          :value="inputpayment['trade']" 
          :checked="inputpayment['trade']"
          v-model="inputpayment['trade']"
          id="trade"
          hidden>
      </div>
      <div class="check_box-box">
        <label for="loan"
          :class="{checkActive:inputpayment['loan']}"
          @click="checktest"
          id="loan">대출</label>
        <input type="checkbox"
          :value="inputpayment['loan']" 
          :checked="inputpayment['loan']"
          v-model="inputpayment['loan']"
          id="loan"
          hidden>
      </div>
      <div class="check_box-box">
        <label for="card"
          :class="{checkActive:inputpayment['card']}"
          @click="checktest"
          id="card">카드</label>
        <input type="checkbox"
          :value="inputpayment['card']" 
          :checked="inputpayment['card']"
          v-model="inputpayment['card']"
          id="card"
          hidden>
      </div>
      <div class="check_box-box">
        <label for="lease"
          :class="{checkActive:inputpayment['lease']}"
          @click="checktest"
          id="lease">리스</label>
        <input type="checkbox"
          :value="inputpayment['lease']" 
          :checked="inputpayment['lease']"
          v-model="inputpayment['lease']"
          id="lease"
          hidden>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PaymentForm',
  props:{
    payment_method:{
      type:Object,
    }
  },
  methods:{
    checktest(e){
      this.inputpayment[e.target.id] = !this.inputpayment[e.target.id]
      this.$emit('onPayment', this.inputpayment)
    }
  },
  created(){
    this.inputpayment = {...this.payment_method}
  },
  data(){
    return{
      inputpayment:{}
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.payment-form{
  @include register-form-contain;
  .check_box-contain{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .check_box-box{
      flex-basis: 16%;
      label{
        @include label-btn;
      }
    }
  }
}
</style>