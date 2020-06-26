<template>
  <div class="user-item-page">
      <div class="sell-state-contain">
          <div class="state_check_btn-box">
              <button 
                @click="leftBtn" 
                :class="{active:activeBtn}">판매중인 오토바이</button>
              <button 
                @click="rightBtn"
                :class="{active:!activeBtn}">최근 본 매물</button>
          </div>
          <state-check 
            v-show="activeBtn"
            :items="sellItems"/>
          <state-check 
            v-show="!activeBtn"/>
      </div>
  </div>
</template>

<script>
import StateCheck from '@/components/StateCheck'

export default {
    name: 'UserItemPage',
    components:{
        StateCheck
    },
    methods:{
        leftBtn(){
            this.activeBtn = true
        },
        rightBtn(){
            this.activeBtn = false
        }
    },
    data(){
        return{
            activeBtn:true,
            sellItems:[
                {
                    model: 'BMW - S100RR',
                    price: 3000,
                    images:[
                        {
                            id:1,
                            image:'/static/item1.jpg'
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.user-item-page{
    @include flex-colum-center;
    .sell-state-contain{
        @include flex-colum-center;
        .state_check_btn-box{
            display: inline-flex;
            border-radius: 10px;
            margin-bottom: 0.25rem;
            button{
                @include container;
                @include outline-none;
                width: 17.1875rem;
                height: 2.75rem;
                border: 0;
                box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
                background-color: $gray;
                font-size: 1.25rem;
                cursor: pointer;
                &:first-child{
                    border-bottom-left-radius: 10px;
                    border-top-left-radius: 10px;
                }
                &:nth-child(2){
                    border-bottom-right-radius: 10px;
                    border-top-right-radius: 10px;
                }
            }
            .active{
                background-color: $orange;
                color: $white;
            }
        }
    }
}
</style>