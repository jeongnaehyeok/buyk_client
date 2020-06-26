<template>
  <header>
    <div class="header-left-contain">
      <div class="header-logo-contain">
        <router-link class="logo-box" :to="{ name: 'Listpage'}">
            <img src="/static/icon.png" alt="로고">
            <p><strong>BuyK</strong></p>
        </router-link>
      </div>
      <form @click.prevent="onSubmit">
        <input type="text"
          placeholder="찾으시는 바이크 모델을 검색해 보세요.">
        <button><i class="fas fa-search"></i></button>
      </form>
    </div>
    <div class="header-right-contain">
      <div class="sell-box" v-if="true">
        <p>방구석 호랑이님 바이크를</p>
        <p>판매하시겠습니까?</p>
        <p class="sell-btn">
          <router-link :to="{ name: 'UserItemPage'}">
            판매하기
          </router-link>
        </p>
      </div>
      <div class="login-contain" v-if="false">
        <router-link :to="{ name: 'IndexPage'}">
          Login
        </router-link>
        /
        <router-link :to="{ name: 'IndexPage'}">
          SignUp
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name:'Header',
}
</script>

<style lang="scss">
@import '@/style/index.scss';

header{
  @include container-max-size;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left-contain{
    @include flex-row-center;
    .header-logo-contain{
      margin-right: 1.625rem;
    }
    form{
      display: flex;
      width: 23.25rem;
      height: 2.375rem;
      border-radius: 5px;
      border: solid 0.5px $black;
      input{
        @include container;
        @include outline-none;
        padding-left: 1.625rem;
        border: 0;
        background-color: $none-color;
        flex-basis: 90%;
      }
      button{
        @include container;
        @include outline-none;
        border: 0;
        background-color: $none-color;
        flex-basis: 10%;
      }
    }
  }
  .header-right-contain{
    @include flex-row-center;
    margin-top: 1.25rem;
    .sell-box{
      @include flex-colum;
      align-items: flex-end;
      font-size: 0.875rem;
      p{
        @include container;
      }
      .sell-btn{
        width: 5rem;
        margin-top: 0.25rem;
        border-radius: 8px;
        background-color: $orange;
        text-align: center;
        cursor: pointer;
        a{
          color:$white;
        }
      }
    }
  }
}
</style>