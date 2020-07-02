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
          <before-check 
            v-show="!activeBtn"
            :items="beforShow"/>
          <router-link class="sell_btn-contain" :to="{ name: 'Register'}">바이크 판매하기</router-link>
      </div>
  </div>
</template>

<script>
import StateCheck from '@/components/StateCheck'
import BeforeCheck from '@/components/BeforeCheck'

import { mapActions, mapState } from 'vuex'

export default {
    name: 'UserItemPage',
    components:{
        StateCheck,
        BeforeCheck
    },
    methods:{
        leftBtn(){
            this.activeBtn = true
        },
        rightBtn(){
            this.activeBtn = false
        },
        ...mapActions([
            'getRegistList',
        ])
    },
    computed:{
        ...mapState([
            'items'
        ])
    },
    created(){
        this.getRegistList()
            .then(()=>{
                this.sellItems = this.items
            })
        this.beforShow = localStorage.BeforeShow ? JSON.parse(localStorage.BeforeShow) : [];
    },
    data(){
        return{
            activeBtn:true,
            sellItems:[],
            beforShow:[]
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
            margin-bottom: 0.25rem;
            border-radius: 10px;
            button{
                @include toggle-btn;
                width: 17.1875rem;
            }
        }
        .sell_btn-contain{
            width: 34.375rem;
            height: 2.75rem;
            padding: 0.5rem;
            border-radius: 10px;
            box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
            color: $white;
            background: $orange;
            text-align: center;
            font-size: 1.25rem;
        }
    }
}
</style>