<template>
  <div class="state-check">
    <div class="scroll_contain">
        <ul>
            <li v-for="item in items" :key="item.index">
                <img :src="'http://127.0.0.1:8000' + item.images[0].image" alt="">
                <div class="bike_info-box">
                    <div class="state_text-box">
                        <p class="model">{{ item.model }}</p>
                        <p class="price">{{ showPrice(item.price) }} 만원</p>
                    </div>
                    <div class="state_btn-box">
                        <button @click.prevent="onEdit" :id="item.id">수정</button>
                        <button @click.prevent="onDelete" :id="item.id">삭제</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { checkPrice } from '@/utils';
import api from '@/api'

export default {
    name:'StateCkeck',
    props:{
        items:{
            type:Array,
        }
    },
    methods:{
        showPrice(price){
            return checkPrice(price)
        },
        onDelete(e){
            const id = e.target.id
            api.delete(`/api/bikes/${id}/delete`)
                .then(res => {
                    alert('게시글이 성공적으로 삭제되었습니다.')
                    this.$router.go()
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('로그인이 필요합니다.')
                        this.$router.push({ name: 'Signin' })
                    }
                    else if(err.response.status === 403){
                        alert(err.response.data.msg)
                    }                    
                })
        },
        onEdit(e){
            const id = e.target.id
            // this.$router.push({name: "List"})
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