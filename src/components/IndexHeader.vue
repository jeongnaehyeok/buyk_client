<template>
  <div class="index-header">
    <div class="header-logo-contain">
        <router-link class="logo-box" :to="{ name: 'IndexPage'}">
            <img src="/static/icon.png" alt="로고">
            <p><strong>BuyK</strong></p>
        </router-link>
    </div>
    <div class="header-contents-contain">
        <div class="choise-box">
            <router-link :to="{ name: 'IndexPage'}" class="choise-type-active" >바이크 매물 검색</router-link>
            <router-link :to="{ name: 'UserItemPage'}" class="choise-type">바이크 매물 팔기</router-link>
        </div>
        <div class="arrow-up"></div>
        <form class="serch-box" @submit.prevent="onSearch">
          <div class="input-box">
            <i class="fas fa-search"></i>
            <input type="text" 
              autocomplete="off" 
              placeholder="찾으시는 바이크 모델을 검색해보세요!" 
              v-model="search"
              @click="onTypeIn"/>
          </div>
          <button type="submit">검색</button>
          <div class="search_help-contain" v-if="searchToggle">
            <ul class="bike_type-contain">
              <li class="bike_type-box" 
                v-for="item in bikeTypes" 
                :key="item.bike_type" 
                @click.capture="bikeTypeSearch"
                :id="item.bike_type">
                <img :src="item.image" :alt="item.name">
                <p>{{ item.name }}</p>
              </li>
            </ul>
            <div class="recently_search-box">
              <p class="title">최근 검색어</p>
              <ul>
                <li v-for="(search, index) in recentlySearch" :key="index">
                  {{ search.length > 10 ? search.substr(0, 10)+"..." : search }}
                </li>
              </ul>
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import api from '@/api'

export default {
  name:'IndexHeader',
  methods:{
    onTypeIn(){
      this.searchToggle = !this.searchToggle
    },
    onSearch(){
      this.typeInSearch(this.search)
        .then(()=>{
          if(this.recentlySearch.length>5) this.recentlySearch.splice(0, 1)
          this.recentlySearch.push(this.search)
          const jsonRecentlySearch = JSON.stringify(this.recentlySearch)
          localStorage.setItem('recentlySearch', jsonRecentlySearch)
          this.$router.push({name: "Listpage"})
        })
    },
    bikeTypeSearch(e){
      const bike_type = e.currentTarget.id
      this.filterList({ bike_type })
      this.$router.push({name: "Listpage"})
    },
    ...mapActions([
      'typeInSearch',
      'filterList'
    ])
  },
  data(){
    return{
      search: '',
      searchToggle: false,
      recentlySearch: [],
      bikeTypes:[
        {
          "image":'/static/icNaked@2x.png',
          "name":'네이키드',
          "bike_type":'NK'
        },
        {
          "image":'/static/icReplica@2x.png',
          "name":'레플리카',
          "bike_type":'RL'
        },
        {
          "image":'/static/icAmerican@2x.png',
          "name":'아메리칸',
          "bike_type":'AM'
        },
        {
          "image":'static/icScooter@2x.png',
          "name":'스쿠터',
          "bike_type":'SC'
        },
        {
          "image":'static/icTour@2x.png',
          "name":'투어링',
          "bike_type":'TL'
        },
        {
          "image":'static/icElec@2x.png',
          "name":'전기',
          "bike_type":'EL'
        },
        {
          "image":'static/icIndustrial@2x.png',
          "name":'상업용',
          "bike_type":'CM'
        },
        {
          "image":'static/icAtv@2x.png',
          "name":'ATV',
          "bike_type":'AT'
        },
        {
          "image":'static/icOffroad@2x.png',
          "name":'오프로드',
          "bike_type":'OL'
        },
        {
          "image":'static/icMini@2x.png',
          "name":'포켓,미니',
          "bike_type":'MI'
        }
      ],
    }
  },
  created(){
    this.recentlySearch = localStorage.recentlySearch ? JSON.parse(localStorage.recentlySearch) : [];
  },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.index-header{
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  height: 40rem;
  background-image: url("/static/thumnail.jpg");
  background-repeat:no-repeat;
  background-position : center;
  background-size:cover;
  .header-logo-contain{
    width: 64rem;
  }
}

.header-contents-contain{
  @include flex-colum-center;
  $box-width:57.5rem;
  $serch-box-height:3.5rem;
  $serch-box-padding:0.25rem;

  width: 100%;
  height: 13.25rem;
  background-color: $opacity-black;
  .choise-box{
    display: flex;
    width: $box-width;
    margin: 1.875rem 0 1rem 0;
    justify-content: space-around;
    align-items: center;
    .choise-type{
        font-size: 1.5rem; // 24px
        text-align: center;
        color: $white;
        opacity: initial;
    }
    .choise-type-active{
        @extend .choise-type;
        color: $orange;
    }
  }
  .arrow-up {
    width: 0; 
    height: 0;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-bottom: 1.25rem solid $orange;
    margin-right: 30rem;
  }
  .serch-box{
    $fonts-size: 1.25rem;
    @include flex-row-center;
    width: $box-width;
    height: $serch-box-height;
    border-radius: 2px;
    background-color: $orange;
    padding: $serch-box-padding;
    .input-box{
      @include flex-row-center;
      width: 100%;
      height: 3rem;
      background-color: $white;
      .fa-search{
        margin: 0 0.625rem;
        font-size: 1.5rem;
      }
      input{
        height: 100%;
        width: 100%;
        border: 0;
        font-size: $fonts-size;
        &:hover, &:focus{
          outline: none;
        }
      }
    }
    button{
      height: 100%;
      width: 7.5rem;
      border: 0;
      color:$white;
      background: $orange;
      font-size: $fonts-size;
      cursor: pointer;
      @include outline-none;
    }
    .search_help-contain{
      $search_help-height: 13.75rem;
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: $box-width;
      height: 13.75rem;
      margin-top: $serch-box-height/2+$search_help-height/2;
      margin-left: -$serch-box-padding;
      border-radius: 2px;
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      border: solid 1px #bfbfbf;
      background: $white;
      z-index: 100;
      .bike_type-contain{
        @include flex-row-center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 65%;
        padding: 0 0 0 4.75rem;
        .bike_type-box{
          width: 4rem;
          margin: 0 1rem ;
          cursor: pointer;
          p{
            @include container;
            text-align: center;
          }
          img{
            width: 100%;
          }
        }
      }
      .recently_search-box{
        width: 35%;
        margin-top: 0.625rem;
        .title{
          font-size: 0.875rem;
          text-align: center;
          color: $orange;
        }
        ul{
          @include flex-colum-center;
        }
      }
      ul{
        @include container;
        list-style: none;
      }
    }
  }
}
</style>