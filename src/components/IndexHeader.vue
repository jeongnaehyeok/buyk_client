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
            <router-link :to="{ name: 'IndexPage'}" class="choise-type">바이크 매물 팔기</router-link>
        </div>
        <div class="arrow-up"></div>
        <form class="serch-box" @submit.prevent="">
          <div class="input-box">
            <i class="fas fa-search"></i>
            <input type="text" autocomplete="off" placeholder="찾으시는 바이크 모델을 검색해보세요! "/>
          </div>
          <button type="submit">검색</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name:'IndexHeader',
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.index-header{
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  height: 41rem;
  background-image: url("/static/thumnail.jpg");
  background-repeat:no-repeat;
  background-position : center;
  background-size:cover;
}

.header-logo-contain{
  width: 64rem;
  .logo-box{
    display: flex;
    align-items: center;
    img{
      margin: 0.75rem;
      width: 1.825rem;
      height: auto;
    }
    p{
      font-size: 1.125rem; // 18px
    }
  }
}
.header-contents-contain{
  @include flex-colum-center;
  $box-width:57.5rem;
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
    height: 3.5rem;
    border-radius: 2px;
    background-color: $orange;
    padding: 0.25rem;
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
      border: 0;
      width: 7.5rem;
      color:$white;
      background: $orange;
      height: 100%;
      font-size: $fonts-size;
      &:hover, &:focus{
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>