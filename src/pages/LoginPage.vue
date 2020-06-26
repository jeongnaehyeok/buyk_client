<template>
  <div class="login-pgae">
    <div class="login-contain">
      <h1>Login</h1>
      <form @click.prevent="onSubmit">
        <input type="text" placeholder="아이디를 입력해주세요">
        <input type="password" placeholder="비밀번호를 입력해주세요">
        <button>Login</button>
        <p>회원이 아니신가요? <router-link :to="{ name: 'LoginPage' }">회원가입하러 가기</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginPage',
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.login-pgae{
  @include colum-container;
  height: 100%;
  margin-top: 10vh;
  justify-content: center;
  .login-contain{
    @include flex-colum-center;
    width: 34.375rem;
    margin: 1rem;
    padding: 2.5rem;
    background: $gray;
    img{
      width: 2.5rem;
    }
    h1{
      margin-top: 0rem;
      margin-bottom: 2rem;
    }
    p{
      width: 100%;
      a{
        color: $orange;
      }
    }
    form{
      @include colum-container;
      input{
        @include user-input-box;
        border: 0;
        margin-bottom: 0.775rem;
      }
      button{
        @include outline-none;
        @include user-input-box;
        width: 100%;
        border: 0;
        background: $orange;
        color: $white;
      }
    }
  }
}
</style>