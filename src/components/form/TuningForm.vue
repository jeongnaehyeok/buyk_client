<template>
  <div class="tuning-form">
    <h2>바이크를</h2>
    <h2>튜닝하신적 있으신가요?</h2>
    <br>
    <div class="toggle-btn-box">
        <button @click="leftBtn" 
            :class="{active:activeBtn}">네</button>
        <button @click="rightBtn"
            :class="{active:!activeBtn}">아니요</button>
    </div>
    <template v-if="activeBtn">
    <h2>튜닝 내역을</h2>
    <h2>작성해주세요!</h2>
    <br>
    <textarea v-model="inputTuning"
        rows="5"
        placeholder="사고 및 수리내용을 작성해주세요!" />
    </template>
  </div>
</template>

<script>
export default {
    name: 'TuningForm',
    props:{
        tuning_history:{
            type:String
        }
    },
    methods:{
        leftBtn(){
            this.activeBtn = true
            this.$emit('onTuning', this.inputTuning)
        },
        rightBtn(){
            this.activeBtn = false
            this.$emit('onTuning', "없음")
        }
    },
    watch:{
        inputTuning(){
            this.$emit('onTuning', this.inputTuning)
        }
    },
    created(){
        this.inputTuning = this.tuning_history == "없음" ? '' : this.tuning_history;
    },
    data(){
        return{
            activeBtn:true,
            inputTuning:'',
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.tuning-form{
  @include register-form-contain;
  .toggle-btn-box{
        display: inline-flex;
        width: 100%;
        margin-bottom: 1rem;
        button{
            @include toggle-btn;
        }
    }
    textarea {
        @include buyk-textarea;
    }
}
</style>