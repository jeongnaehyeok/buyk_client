<template>
  <div class="index-page">
    <index-header />
    <p class="recent-items-title">최근 본 매물</p>
    <item-list :items="beforShow"/>
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
  created(){
    this.beforShow = localStorage.BeforeShow ? JSON.parse(localStorage.BeforeShow) : [];
  },
  data(){
    return{
      beforShow:[]
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