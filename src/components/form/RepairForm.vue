<template>
  <div class="reqair-form">
    <h2>혹시, 바이크가</h2>
    <h2>사고 또는 수리이력이 있나요?</h2>
    <br>
    <div class="toggle-btn-box">
        <button @click="leftBtn" 
            :class="{active:activeBtn}">네</button>
        <button @click="rightBtn"
            :class="{active:!activeBtn}">아니요</button>
    </div>
    <template v-if="activeBtn">
    <h2>사고 및 수리내용을</h2>
    <h2>작성해주세요!</h2>
    <br>
    <textarea v-model="inputRepair"
        rows="5"
        placeholder="사고 및 수리내용을 작성해주세요!" />
    </template>
  </div>
</template>

<script>
export default {
    name: 'RepairForm',
    props:{
        repair_history:{
            type:String
        }
    },
    methods:{
        leftBtn(){
            this.activeBtn = true
            this.$emit('onRepair', this.inputRepair)
        },
        rightBtn(){
            this.activeBtn = false
            this.$emit('onRepair', "없음")
        }
    },
    watch:{
        inputRepair(){
            this.$emit('onRepair', this.inputRepair)
        }
    },
    created(){
        this.inputRepair = this.repair_history == "없음" ? '' : this.repair_history;
    },
    data(){
        return{
            activeBtn:true,
            inputRepair:'',
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.reqair-form{
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