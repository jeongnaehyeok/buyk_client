<template>
  <div class="list-page">
      <p class="title">실시간 매물</p>
      <item-list :items="items"/>
      <p class="title">최근 본 매물</p>
      <item-list :items="items"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ItemList from '@/components/ItemList'

export default {
    name: "ListPage",
    components:{
        ItemList
    },
    computed:{
        ...mapState([
            'items'
        ])
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