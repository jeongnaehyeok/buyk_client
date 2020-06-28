<template>
  <div class="detail-form">
    <h2>바이크의</h2>
    <h2>상세정보를 기입해주세요!</h2>
    <h2>(30자 이상)</h2>
    <br>
    <textarea v-model="inputDetail"
        rows="5"
        placeholder="사고 및 수리내용을 작성해주세요!" />
  </div>
</template>

<script>
export default {
    name: 'DetailForm',
    props:{
        detail_information:{
            type:String
        }
    },
    methods:{
        leftBtn(){
            this.activeBtn = true
        },
        rightBtn(){
            this.activeBtn = false
            this.$emit('onDetail', "없음")
        }
    },
    watch:{
        inputDetail(){
            this.$emit('onDetail', this.inputDetail)
        }
    },
    created(){
        this.inputDetail = this.detail_information == "없음" ? '' : this.detail_information;
    },
    data(){
        return{
            activeBtn:true,
            inputDetail:'',
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.detail-form{
  @include register-form-contain;
    textarea {
        @include buyk-textarea;
    }
}
</style>