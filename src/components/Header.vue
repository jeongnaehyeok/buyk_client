<template>
  <header>
    <div class="header-left-contain">
      <div class="header-logo-contain">
        <router-link class="logo-box" :to="{ name: 'List'}">
            <img src="/static/icon.png" alt="로고">
            <p><strong>BuyK</strong></p>
        </router-link>
      </div>
      <form @submit.prevent="onSubmit">
        <input type="text"
          placeholder="찾으시는 바이크 모델을 검색해 보세요.">
        <button><i class="fas fa-search"></i></button>
      </form>
    </div>
    <div class="header-right-contain">
      <div class="sell-box" v-if="isAuthorized">
        <p @click="onLogout">{{ me.username }}님 바이크를</p>
        <p>판매하시겠습니까?</p>
        <p class="sell-btn">
          <router-link :to="{ name: 'UserItem'}">
            판매하기
          </router-link>
        </p>
      </div>
      <div class="login-contain" v-if="!isAuthorized">
        <router-link :to="{ name: 'Login'}">
          Login
        </router-link>
        /
        <router-link :to="{ name: 'Signup'}">
          SignUp
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name:'Header',
    methods:{
      onSubmit(){
        console.log("검색기능은 구현하지 못했습니다.");
      },
      onLogout(){
        this.logout()
        alert('로그아웃 되었습니다.')
        this.$router.push({ name: 'Index' })
      },
      ...mapActions(['logout'])
    },
    computed:{
        ...mapGetters(['isAuthorized']),
        ...mapState(['me'])
    },
}
</script>

<style lang="scss">
@import '@/style/index.scss';

header{
  @include container-max-size;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
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
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      input{
        @include container;
        @include outline-none;
        padding-left: 1rem;
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