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
      items:[]
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.index-page{
  .recent-items-title{
    font-size: $title-font-size;
    text-align: center;
  }
  @include item-box-size;
}
</style>