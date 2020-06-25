<template>
  <router-link class="bike-item" :to="{ name: 'IndexPage'}">
    <carousel class="casousel-box"
      :per-page="1" 
      :loop="true"
      :autoplay="true"
      :autoplayHoverPause="true"
      paginationActiveColor="#f75e00"
      paginationColor="#e5e5e5"
      paginationPosition="bottom-overlay">
      <slide v-for="(image, index) in item.images" :key="index">
        <img v-bind:src="image" alt="">
      </slide>
    </carousel>
    <div class="info-contain">
      <div class="item_info-box">
        <p>{{ item.deal_area }} {{ item.model_year }}년식 {{ item.driven_distance}}km</p>
        <p>{{ checkPrice() }} 만원</p>
      </div>
      <div class="item_date-box">
        <p>{{ showTime() }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { checkTime } from '@/utils';

export default {
  name:"BikeItem",
  props:{
    item:{
      type:Object,
    }
  },
  components: {
    Carousel,
    Slide
  },
  methods:{
    checkPrice(){
      return String(this.item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    showTime(){
      return checkTime(this.item.created_at);
    }
  }
}
</script>

<style lang="scss">
@import '@/style/index.scss';
.VueCarousel-slide{
  margin-bottom: -0.625rem;
}

.bike-item{
  max-width: 100%;
  background: #f4efed;
  margin: 0 1rem 0.5rem 0;
  p{
    @include container;
  }
  .casousel-box{
    width: 100%;
  }
  .info-contain{
    display: flex;
    justify-content: space-between;
    .item_info-box{
      padding: 0.625rem;
    }
    .item_date-box{
      height: 100%;
      background-color: $orange;
      color: $white;
      padding: 0.125rem;
    }
  }
}
</style>