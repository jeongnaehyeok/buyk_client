<template>
  <div class="filter-bar">
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'area'}"
            id="area"
            @click="filterToggle">
                <p id="area">지역</p>
                <i class="fas fa-angle-down" id="area"></i>
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
                <p id="type">타입</p>
                <i class="fas fa-angle-down" id="type"></i>
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
                <p id="price">가격</p>
                <i class="fas fa-angle-down" id="price"></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'price'">
            <div class="number-box">
                <input type="number" 
                    placeholder="최소"
                    v-model="price__gte"
                    @blur="inputPriceGTE">
                <p>만원</p>
            </div>
            <div class="number-box">
                <input type="number" 
                    placeholder="최대"
                    v-model="price__lte"
                    @blur="inputPriceLTE">
                <p>만원</p>
            </div>
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'distance'}"
            id="distance"
            @click="filterToggle">
                <p id="distance">주행 거리</p>
                <i class="fas fa-angle-down" id="distance"></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'distance'">
            <div class="number-box">
                <input type="number" 
                    placeholder="최소"
                    v-model="driven_distance__gte"
                    @blur="inputDistanceGTE">
                <p>Km</p>
            </div>
            <div class="number-box">
                <input type="number" 
                    placeholder="최대"
                    v-model="driven_distance__lte"
                    @blur="inputDistanceLTE">
                <p>Km</p>
            </div>
          </div>
      </div>
      <div class="filter-contain">
          <div class="filter-title"
            :class="{active:activeFilter == 'year'}"
            id="year"
            @click="filterToggle">
                <p id="year">연식</p>
                <i class="fas fa-angle-down" id="year"></i>
          </div>
          <div class="number_filter-box"
            v-show="activeFilter == 'year'">
            <div class="number-box">
                <input type="number" 
                    placeholder="최소"
                    v-model="model_year__gte"
                    @blur="inputYearGTE">
                <p>년</p>
            </div>
            <div class="number-box">
                <input type="number" 
                    placeholder="최대"
                    v-model="model_year__lte"
                    @blur="inputYearLTE">
                <p>년</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"FilterBar",
    props:{
        buyKFilter:{
            type: Object      
        }
    },
    methods:{
        filterToggle(e){
            const target = e.target.id
            this.activeFilter = this.activeFilter == target ? '' : target
        },
        areaToggle(e){
            const target = e.target.id
            this.activeArea = this.activeArea == target ? '' : target
            this.$emit('onFilter', {deal_area:this.activeArea})
        },
        typeToggle(e){
            const target = e.target.id
            this.activeBike = this.activeBike == target ? '' : target
            this.$emit('onFilter', {bike_style:this.activeBike})
        },
        inputPriceGTE(){
            if(this.price__gte){
                this.price__gte = this.price__gte < 2000000 ? this.price__gte : 1999999
                this.price__gte = this.price__gte > 1 ? this.price__gte : 1
                if(this.price__lte) {
                    this.price__lte = Math.max(this.price__lte, Number(this.price__gte) + 1)
                    this.price__gte = Math.min(this.price__gte, Number(this.price__lte) - 1)
                }
                else{
                    this.price__gte = Math.min(this.price__gte, 2000000)
                }
            }
            this.$emit('onFilter', {price__gte:this.price__gte})
        },
        inputPriceLTE(){
            if(this.price__lte){
                this.price__lte = this.price__lte > 1 ? this.price__lte : 2
                this.price__lte = this.price__lte < 200000 ? this.price__lte : 200000
                if(this.price__gte) {
                    this.price__gte = Math.min(this.price__gte, Number(this.price__lte) - 1)
                    this.price__lte = Math.max(this.price__lte, Number(this.price__gte) + 1)
                }
                else{
                    this.price__lte = Math.max(this.price__lte, 0)
                }
            }
            this.$emit('onFilter', {price__lte:this.price__lte})
        },
        inputDistanceGTE(){
            if(this.driven_distance__gte){
                this.driven_distance__gte = this.driven_distance__gte < 2000000 ? this.driven_distance__gte : 1999999
                this.driven_distance__gte = this.driven_distance__gte > 1 ? this.driven_distance__gte : 1
                if(this.driven_distance__lte) {
                    this.driven_distance__lte = Math.max(this.driven_distance__lte, Number(this.driven_distance__gte) + 1)
                    this.driven_distance__gte = Math.min(this.driven_distance__gte, Number(this.driven_distance__lte) - 1)
                }
                else{
                    this.driven_distance__gte = Math.min(this.driven_distance__gte, 2000000)
                }
            }
            this.$emit('onFilter', {driven_distance__gte:this.driven_distance__gte})
        },
        inputDistanceLTE(){
            if(this.driven_distance__lte){
                this.driven_distance__lte = this.driven_distance__lte > 1 ? this.driven_distance__lte : 2
                this.driven_distance__lte = this.driven_distance__lte < 2000000 ? this.driven_distance__lte : 2000000
                if(this.driven_distance__gte) {
                    this.driven_distance__gte = Math.min(this.driven_distance__gte, Number(this.driven_distance__lte) - 1)
                    this.driven_distance__lte = Math.max(this.driven_distance__lte, Number(this.driven_distance__gte) + 1)
                }
                else{
                    this.driven_distance__lte = Math.max(this.driven_distance__lte, 0)
                }
            }
            this.$emit('onFilter', {driven_distance__lte:this.driven_distance__lte})
        },
        inputYearGTE(){
            if(this.model_year__gte){
                this.model_year__gte = this.model_year__gte < 2020 ? this.model_year__gte : 2019
                this.model_year__gte = this.model_year__gte > 1950 ? this.model_year__gte : 1950
                if(this.model_year__lte) {
                    this.model_year__lte = Math.max(this.model_year__lte, Number(this.model_year__gte) + 1)
                    this.model_year__gte = Math.min(this.model_year__gte, Number(this.model_year__lte) - 1)
                }
                else{
                    this.model_year__gte = Math.min(this.model_year__gte, 2020)
                }
            }
            this.$emit('onFilter', {model_year__gte:this.model_year__gte})
        },
        inputYearLTE(){
            if(this.model_year__lte){
                this.model_year__lte = this.model_year__lte > 1950 ? this.model_year__lte : 1951
                this.model_year__lte = this.model_year__lte < 2020 ? this.model_year__lte : 2020
                if(this.model_year__gte) {
                    this.model_year__gte = Math.min(this.model_year__gte, Number(this.model_year__lte) - 1)
                    this.model_year__lte = Math.max(this.model_year__lte, Number(this.model_year__gte) + 1)
                }
                else{
                    this.model_year__lte = Math.max(this.model_year__lte, 1950)
                }
            }
            this.$emit('onFilter', {model_year__lte:this.model_year__lte})
        }
    },
    created(){
        this.activeArea = this.buyKFilter.deal_area ? this.buyKFilter.deal_area : ''
        this.activeBike = this.buyKFilter.bike_style ? this.buyKFilter.bike_style : ''
        this.model_year__gte = this.buyKFilter.model_year__gte ? this.buyKFilter.model_year__gte : ''
        this.model_year__lte = this.buyKFilter.model_year__lte ? this.buyKFilter.model_year__lte : ''
        this.price__gte = this.buyKFilter.price__gte ? this.buyKFilter.price__gte : ''
        this.price__lte = this.buyKFilter.price__lte ? this.buyKFilter.price__lte : ''
        this.driven_distance__gte = this.buyKFilter.driven_distance__gte ? this.buyKFilter.driven_distance__gte : ''
        this.driven_distance__lte = this.buyKFilter.driven_distance__lte ? this.buyKFilter.driven_distance__lte : ''
    },
    data(){
        return{
            activeFilter:'',
            activeArea:'',
            activeBike:'',
            areaList:[
                {"code":'', "ko_area":'전체'},
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
            price__gte:'',
            price__lte:'',
            driven_distance__gte:'',
            driven_distance__lte:'',
            model_year__gte:'',
            model_year__lte:'',
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
            padding: 1rem;
            .number-box{
                display:inline-flex;
                align-items: center;
                margin-bottom: 1rem;
                input[type=number]{
                    @include outline-none;
                    width: 5rem;
                    margin-right: 0.5rem;
                    border: 0;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                p{
                    font-size: 1rem;
                }
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>