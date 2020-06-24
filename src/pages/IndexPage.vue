<template>
  <div class="index-page">
    <index-header />
    <recent-items />
  </div>
</template>

<script>
import IndexHeader from '@/components/IndexHeader';
import RecentItems from '@/components/RecentItems';

export default {
    name: 'IndexPage',
    components:{
      IndexHeader,
      RecentItems,
    }
}
</script>

<style lang="scss">

</style>