<template>
  <div class="detail-page">
      <carousel class="casousel-box"
        :per-page="1" 
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        :navigationEnabled="true"
        :centerMode="true"
        :mouseDrag="true"
        navigationNextLabel=">"
        navigationPrevLabel="<"
        paginationActiveColor="#f75e00"
        paginationColor="#e5e5e5"
        paginationPosition="bottom-overlay">
        <slide v-for="image in item.images" :key="image.id">
            <img :src="'http://127.0.0.1:8000' + image.image" alt="바이크 이미지">
        </slide>
    </carousel>
    <div class="detail-info-contain">
        <div class="item_date-box">
            <p>{{ showTime() }}</p>
        </div>
        <h2>{{item.model}}</h2>
        <p class="item_price-box">{{ showPrice() }} 만원</p>
        <div class="item_payment-box">
            <p :class="{active:payment_method.cash}">현금</p>
            <p :class="{active:payment_method.card}">카드</p>
            <p :class="{active:payment_method.loan}">대출</p>
            <p :class="{active:payment_method.trade}">대차</p>
            <p :class="{active:payment_method.lease}">리스</p>
        </div>
        <table>
            <tr class="table_head">
                <td>거래지역</td>
                <td>주행거리</td>
                <td>연식</td>
                <td>사고</td>
                <td>서류 여부</td>
            </tr>
            <tr class="table_body">
                <td>{{ item.deal_area }}</td>
                <td>{{ item.model_year }}Km</td>
                <td>{{ item.model_year }}년</td>
                <td>{{ showRepair() }}</td>
                <td>{{ item.document_status }}</td>
            </tr>
        </table>
        <h3>튜닝 내역</h3>
        <div class="text_area-box">
            <p>{{ item.tuning_history }}</p>
        </div>
        <h3>사고 내역</h3>
        <div class="text_area-box">
            <p>{{ item.repair_history }}</p>
        </div>
        <h3>상세 정보</h3>
        <div class="text_area-box">
            <p>{{ item.detail_information }}</p>
        </div>
    </div>
    <div class="profile-contain">
        <img src="/static/default.png" alt="프로필 이미지">
        <div class="profile-box">
            <h3>{{item.user}}</h3>
            <p>010-1234-5678</p>
        </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { checkTime, checkPrice } from '@/utils';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'DetailPage',
    components: {
        Carousel,
        Slide
    },
    props:{
        bikeId:{
            type:String,
            required: true,
        },
    },
    methods:{
        showPrice(){
            return checkPrice(this.item.price);
        },
        showTime(){
            return checkTime(this.item.created_at);
        },
        showRepair(){
            return this.item.repair_history == "없음" ? "없음" : "있음"
        },        
        ...mapActions([
            'detailBike',
        ]),
    },
    computed:{
        ...mapState([
            'item',
            'payment_method'
        ]),
    },
    created(){
        this.detailBike(this.bikeId)
            .then(data => {
                    const BeforeShow = localStorage.BeforeShow ? JSON.parse(localStorage.BeforeShow) : [];
                    if(BeforeShow.length > 4) BeforeShow.splice(0, 1)
                    const findIndex = BeforeShow.findIndex(v => v.id == data.id)
                    if(findIndex>-1){
                        BeforeShow.splice(findIndex, 1)
                    }
                    BeforeShow.push(data)
                    const jsonBeforeShow = JSON.stringify(BeforeShow)
                    localStorage.setItem('BeforeShow', jsonBeforeShow)
                }  
            )
            .catch(err => {
                alert("해당 매물을 찾을 수 없습니다.")
                this.$router.back()
            })
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

@mixin detail-box-size{
    width: 40rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
    background: $gray;
}

.detail-page{
    @include contents;
    .casousel-box{
        width: 100%;
        height: 25rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
        background: $gray;
        .VueCarousel-slide{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: auto;
                height: 25rem;
                border-radius: 5px;
            }
        }
        .VueCarousel-navigation-button{
            @include outline-none;
            font-size: 4rem;
            color: $orange;
            &:hover{
                color: $light-orange;
            }
        }
        .VueCarousel-navigation-next{
            margin-right: 4.5rem;
        }
        .VueCarousel-navigation-prev{
            margin-left: 4.5rem;
        }
    }
    .detail-info-contain{
        @include detail-box-size;
        padding: 2.875rem;
        padding-top: 0;
        .item_date-box{
            width: 100%;
            p{
                float: right;
                margin: 0;
                margin-top: 1rem;
            }
        }
        h2{
            margin-bottom: 0;
            font-size: 2.25rem;
            color:$black;
        }
        .item_price-box{
            margin: 0;
            font-size: 1.5rem;
        }
        .item_payment-box{
            display: inline-flex;
            margin-bottom: 1rem;
            p{
                margin: 0;
                margin-right: 0.5rem;
                border: 0;
                &.active{
                    color: $orange;
                }
            }
        }
        table{
            width: 100%;
            text-align: center;
            .table_body{
                font-size: 1.25rem;
                color: $orange;
            }
        }
        h3{
            margin-bottom: 1rem;
        }
        .text_area-box{
            min-height: 2rem;
            padding: 0.5rem;
            background: $white;
        }
    }
    .profile-contain{
        @include detail-box-size;
        display: inline-flex;
        align-items: center;
        
        padding: 1rem 2.875rem;
        img{
            width: 5rem;
            height: auto;
        }
        .profile-box{
            padding-left: 1rem;
            h3{
                margin: 0;
            }
        }
    }
}
</style>