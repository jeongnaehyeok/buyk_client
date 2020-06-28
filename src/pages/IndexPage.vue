<template>
  <div class="index-page">
    <index-header />
    <p class="recent-items-title">최근 본 매물</p>
    <item-list :items="items"/>
  </div>
</template>

<script>
import IndexHeader from '@/components/IndexHeader';
import ItemList from '@/components/ItemList';

export default {
  name: 'IndexPage',
  components:{
    IndexHeader,
    ItemList,
  },
  data(){
    return{
      items:[
        {
          "id": 6,
          "model": "BMW888",
          "user": "test1",
          "price": 1000,
          "bike_style": "레플리카",
          "payment_method": {
              "card": true,
              "cash": false,
              "loan": true,
              "trade": false,
              "lease": false
          },
          "images": [
              {
                  "id": 20,
                  "image": "/media/buyk/item1.jpg"
              },
              {
                  "id": 21,
                  "image": "/media/buyk/item2.jpg"
              }
          ],
          "deal_area": "대구",
          "model_year": 2012,
          "driven_distance": 100000,
          "document_status": "준비됨",
          "repair_history": "없습니다",
          "tuning_history": "없어요",
          "detail_information": "괜찮습니다",
          "crawled_url": null,
          "created_at": "2020-06-25T20:08:51.638092",
          "updated_at": "2020-06-25T20:08:51.638128"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.index-page{
  @include flex-colum-center;
  .recent-items-title{
    margin: 2rem 0;
    font-size: $title-font-size;
    text-align: center;
  }
  @include item-box-size;
  .item-list{
    @include container-max-size;
  }
}
</style>