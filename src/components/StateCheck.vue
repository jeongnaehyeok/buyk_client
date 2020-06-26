<template>
  <div class="state-check">
    <div class="scroll_contain">
        <ul>
            <li v-for="item in items" :key="item.index">
                <img :src='item.images[0].image' alt="">
                <div class="bike_info-box">
                    <div class="state_text-box">
                        <p class="model">{{ item.model }}</p>
                        <p class="price">{{ showPrice(item.price) }} 만원</p>
                    </div>
                    <div class="state_btn-box">
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { checkPrice } from '@/utils';

export default {
    name:'StateCkeck',
    props:{
        items:{
            type:Array,
            default: []
        }
    },
    methods:{
        showPrice(price){
            return checkPrice(price)
        }
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.state-check {
    width: 34.375rem;
    height: 36rem;
    margin-bottom: 0.25rem;
    padding: .375rem 0;
    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    background-color: $gray;
    .scroll_contain{
        width: 100%;
        height: 100%;
        padding-top: 1.875rem;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 3px;
            background: none;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $orange;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-track {
            background: none;
        }
        ul{
            @include colum-container;
            width: 100%;
            padding: 0;
            list-style: none;
            li{
                @include flex-row-center;
                width: 29.375rem;
                height: 9.125rem;
                margin-bottom: 2.25rem;
                padding: 1rem;
                background: $white;
                img{
                    width: 10rem;
                    height: 7.5rem;
                    margin-right: 1rem;
                }
                .bike_info-box{
                    @include flex-colum;
                    width: 100%;
                    height: 100%;
                    justify-content: space-between;
                    .state_text-box{
                        .model{
                        margin: 0;
                        font-size: 1.5rem;
                        }
                        .price{
                            margin: 0;
                            font-size: 1.125rem;
                        }
                    }
                    .state_btn-box{
                        text-align: right;
                        button{
                            @include outline-none;
                            width: 5.5rem;
                            height: 1.875rem;
                            margin-left: 0.125rem;
                            border: 0;
                            border-radius: 5px;
                            color: $orange;
                            cursor: pointer;
                            &:nth-child(2){
                                color:$white;
                                background-color: $orange;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>