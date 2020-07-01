<template>
  <div class="list-page">
      <filter-bar />
      <p class="title">실시간 매물</p>
      <item-list :items="items"/>
      <p class="title">최근 본 매물</p>
      <item-list :items="beforShow"/>
  </div>
</template>

<script>
import { mapActions ,mapState } from 'vuex'

import ItemList from '@/components/ItemList'
import FilterBar from '@/components/FilterBar'

export default {
    name: "ListPage",
    components:{
        FilterBar,
        ItemList
    },
    methods:{
        ...mapActions([
            'getList',
        ])
    },
    computed:{
        ...mapState([
            'items'
        ])
    },
    created(){
        this.buyKFilter = localStorage.BuyKFilter ? JSON.parse(localStorage.BuyKFilter) : [];
        this.beforShow = localStorage.BeforeShow ? JSON.parse(localStorage.BeforeShow) : [];
        this.getList(this.filter)
    },
    data(){
        return{
            buyKFilter:{},
            beforShow:[]
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.list-page{
    @include container-max-size;
    .title{
        width: 18.75rem;
        font-size: $title-font-size;
        border-bottom: 1px solid $black;
        margin: 0.5rem 0 1rem;
    }
    @include item-box-size;
    .item-list{
        @include container-max-size;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}
</style>