<template>
  <div class="filter-bar">
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'area'}"
            id="area"
            @click="filterToggle">
                <p>지역</p>
                <i class="fas fa-angle-down"></i>
          </div>
          <div class="filter-box"
            v-show="activeFilter == 'area'">
                <p v-for="area in areaList"
                    :class="{active:activeArea == area.code}"
                    :key="area.code"
                    :id="area.code"
                    @click="areaToggle">
                {{area.ko_area}}
                </p>
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'type'}"
            id="type"
            @click="filterToggle">
                <p>타입</p>
                <i class="fas fa-angle-down"></i>
          </div>
          <div class="filter-box"
            v-show="activeFilter == 'type'">
              <div class="type-box"
                v-for="type in bikeTypes" 
                :key="type.bike_type"
                :class="{active:activeBike == type.bike_type}"
                :id="type.bike_type"
                @click="typeToggle">
                <img :src="type.image" 
                    :alt="type.name"
                    :id="type.bike_type">
                <p :id="type.bike_type">{{type.name}}</p>
              </div>
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'price'}"
            id="price"
            @click="filterToggle">
                <p>가격</p>
                <i class="fas fa-angle-down" ></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'price'">
            <input type="number" 
                placeholder="최소"
                v-model="filter.price__gte">
            <input type="number" 
                placeholder="최대"
                v-model="filter.price__lte">
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'distance'}"
            id="distance"
            @click="filterToggle">
                <p>주행 거리</p>
                <i class="fas fa-angle-down"></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'distance'">
            <input type="number" 
                placeholder="최소"
                v-model="filter.model_year__gte">
            <input type="number" 
                placeholder="최대"
                v-model="filter.model_year__lte">
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'year'}"
            id="year"
            @click="filterToggle">
                <p>연식</p>
                <i class="fas fa-angle-down" ></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'year'">
            <input type="number" 
                placeholder="최소"
                v-model="filter.model_year__gte">
            <input type="number" 
                placeholder="최대"
                v-model="filter.model_year__lte">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"FilterBar",
    methods:{
        filterToggle(e){
            const target = e.target.id
            this.activeFilter = this.activeFilter == target ? '' : target
        },
        areaToggle(e){
            const target = e.target.id
            this.activeArea = this.activeArea == target ? 'AL' : target
        },
        typeToggle(e){
            const target = e.target.id
            console.log(target);
            this.activeBike = this.activeBike == target ? '' : target
        }
    },
    created(){
    },
    data(){
        return{
            activeFilter:'',
            activeArea:'AL',
            activeBike:'',
            areaList:[
                {"code":'AL', "ko_area":'전체'},
                {"code":'SU', "ko_area":'서울'},
                {"code":'BS', "ko_area":'부산'},
                {"code":'IC', "ko_area":'인천'},
                {"code":'GJ', "ko_area":'광주'},
                {"code":'US', "ko_area":'울산'},
                {"code":'DJ', "ko_area":'대전'},
                {"code":'SJ', "ko_area":'세종'},
                {"code":'DG', "ko_area":'대구'},
                {"code":'GG', "ko_area":'경기'},
                {"code":'GW', "ko_area":'강원'},
                {"code":'GN', "ko_area":'경남'},
                {"code":'GB', "ko_area":'경북'},
                {"code":'CB', "ko_area":'충북'},
                {"code":'CN', "ko_area":'충남'},
                {"code":'JB', "ko_area":'전북'},
                {"code":'JN', "ko_area":'전남'},
                {"code":'JJ', "ko_area":'제주'},
            ],
            bikeTypes:[
                {
                "image":'/static/icNaked@2x.png',
                "name":'네이키드',
                "bike_type":'NK',
                },
                {
                "image":'/static/icReplica@2x.png',
                "name":'레플리카',
                "bike_type":'RL',
                },
                {
                "image":'/static/icAmerican@2x.png',
                "name":'아메리칸',
                "bike_type":'AM',
                },
                {
                "image":'static/icScooter@2x.png',
                "name":'스쿠터',
                "bike_type":'SC',
                },
                {
                "image":'static/icTour@2x.png',
                "name":'투어링',
                "bike_type":'TL',
                },
                {
                "image":'static/icElec@2x.png',
                "name":'전기',
                "bike_type":'EL',
                },
                {
                "image":'static/icIndustrial@2x.png',
                "name":'상업용',
                "bike_type":'CM',
                },
                {
                "image":'static/icAtv@2x.png',
                "name":'ATV',
                "bike_type":'AT',
                },
                {
                "image":'static/icOffroad@2x.png',
                "name":'오프로드',
                "bike_type":'OL',
                },
                {
                "image":'static/icMini@2x.png',
                "name":'포켓,미니',
                "bike_type":'MI',
                }
            ],
            filter:{
                model:'',
                deal_area:'',
                bike_style:'',
                model_year__gte:'',
                model_year__lte:'',
                price__gte:'',
                price__lte:'',
                driven_distance__gte:'',
                driven_distance__lte:'',
                payment_method:{},
                page:'',
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.filter-bar{
    .active{
    @include active;
        box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
    }
    display: inline-flex;
    width: 100%;
    border-bottom: 1px solid $black;
    .filter-contain{
        cursor: pointer;
        .filter-title{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 8rem;
            padding: 0.625rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-size: 1.125rem;
            p{
                margin-right: 1rem;
            }
        }
        .filter-box{
            @include filter-box;
            min-width: 8rem;
            max-height: 40vh;
            overflow: hidden;
            overflow-y: scroll;
            p{
                width: 100%;
                padding: 0.625rem 0;
                font-size: 1.125rem;
                text-align: center;
                &.active{
                    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
                }
            }
            .type-box{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 8rem;
                min-height:6rem;
                img{
                    width: 5rem;
                    height: auto;
                }
            }
        }
        .number_filter-box{
            @include filter-box;
            width: 10rem;
            padding: 1rem;
            input[type=number]{
                @include outline-none;
                width: 100%;
                margin-bottom: 1rem;
                border: 0;
                border-radius: 5px;
                font-size: 1rem;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>