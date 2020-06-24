<template>
    <div class="recent-items">
        <p class="recent-items-title">최근 본 매물</p>
        <div class="items-contain">
            <bike-item :item="item"/>
            <bike-item :item="item"/>
            <bike-item :item="item"/>
            <bike-item :item="item"/>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import BikeItem from '@/components/BikeItem'

export default {
    name:"RecentItems",
    components:{
        BikeItem
    },
    data(){
        return {
            item:{
                "id": 4,
                "model": "BMW - S1000RR",
                "user": "test1",
                "price": 3000,
                "bike_style": "레플리카",
                "payment_method": {
                    "card": true,
                    "cash": false,
                    "loan": false,
                    "trade": false,
                    "lease": false
                },
                "images": ["/static/item1.jpg", "/static/item2.jpg", "/static/item3.jpg"],
                "deal_area": "전북",
                "model_year": 2017,
                "driven_distance": 2000,
                "document_status": "준비되지않음",
                "repair_history": "없습니다",
                "tuning_history": "없습니다",
                "detail_information": "없습니다",
                "crawled_url": null,
                "created_at": "2020-06-23T11:55:29.877298",
                "updated_at": "2020-06-23T11:55:29.877321"
            },
        }
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.recent-items{
    @include colum-container;
    margin-bottom: 1rem;
    .recent-items-title{
        font-size: 1.875rem;
        text-align: center;
    }
    .items-contain{
        display: flex;
        justify-content: center;
    }
    .bike-item{
        width: 19.625rem;
        margin: 0 0.5rem 1rem 0.5rem;
    }
}
</style>