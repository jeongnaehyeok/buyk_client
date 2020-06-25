<template>
    <div class="item-list">
        <bike-item :item="item" v-for="item in items" :key="item.id"/>
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
    props:{
        items:{
            type:Array,
        }
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.item-list{
    display: flex;
    justify-content: center;
}
</style>