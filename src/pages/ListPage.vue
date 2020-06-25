<template>
  <div class="list-page">
      <p class="title">실시간 매물</p>
      <item-list :items="items"/>
      <p class="title">최근 본 매물</p>
      <item-list :items="items"/>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'

export default {
    name: "ListPage",
    components:{
        ItemList
    },
    data(){
        return {
            items:[
                {
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
            ]
        }
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.list-page{
    width: 95%;
    .title{
        width: 18.75rem;
        font-size: $title-font-size;
        border-bottom: 1px solid $black;
    }
    .item-list{
        justify-content: space-between;
        @include item-box-size;
    }
}
</style>