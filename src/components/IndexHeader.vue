<template>
  <div class="index-header">
    <div class="header-logo-contain">
        <router-link class="logo-box" :to="{ name: 'IndexPage'}">
            <img src="/static/icon.png" alt="로고">
            <p><strong>BuyK</strong></p>
        </router-link>
    </div>
    <div class="header-search-contain">
        <div class="choise-box">
            <router-link :to="{ name: 'IndexPage'}" class="choise-type-active" >바이크 매물 검색</router-link>
            <router-link :to="{ name: 'IndexPage'}" class="choise-type">바이크 매물 팔기</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'IndexHeader',
}
</script>

<style lang="scss">
.header-logo-contain{
  width: 100%;
  .logo-box{
    display: flex;
    align-items: center;
    img{
      width: 150px;
      height: auto;
    }
  }
}
.header-search-contain{
    width: 100%;
    .choise-box{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: $black;
        opacity: 0.4;
        .choise-type{
            width: 161px;
            height: 23px;
            font-size: 24px;
            text-align: center;
            color: #ffffff;
            
        }
        .choise-type-active{
            @extend .choise-type;
        }
    }
}
</style>