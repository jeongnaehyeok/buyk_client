<template>
  <div class="sign-page">
    <div class="sign-contain">
      <h1>SignUp</h1>
      <form novalidate @submit.prevent="onSubmit">
        <input type="text" 
            placeholder="아이디를 입력해주세요"
            v-model="name">
        <input type="email"
            placeholder="이메일을 입력해주세요." 
            v-model="email"/>
        <input type="password" 
            placeholder="비밀번호를 입력해주세요"
            v-model="password1">
        <input type="password" 
            placeholder="비밀번호를 다시 한번 입력해주세요."
            v-model="password2">
        <button>SignUp</button>
        <p>이미 가입하셨나요? <router-link :to="{ name: 'Login' }">로그인하러가기</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SignupPage',
    methods:{
      onSubmit(){
        const { name, email, password1, password2 } = this;
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; 
        if(!name || !email || !password1 || !password2) return  alert('모든 항목을 입력해주세요.')
        if(!reg_email.test(email)) return alert('이메일 형식이 맞지 않습니다.');
        if(password1 !== password2) return alert('비밀번호가 일치하지 않습니다.')
        this.signup({ name, email, password1, password2 })
          .then(res => {
            alert('회원가입이 완료되었습니다.');
            this.$router.push({name: "List"})
          })
          .catch(err => {
            alert('아이디가 이미 존재합니다.')
          })
      },
      ...mapActions([
        'signup',
      ])
    },
    data(){
      return{
        name:'',
        email:'',
        password1:'',
        password2:''
      }
    }
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.sign-page{
  @include colum-container;
  height: 100%;
  margin-top: 10vh;
  justify-content: center;
  .sign-contain{
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
        margin-bottom: 0.775rem;
        border: 0;
        box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
        &:focus{
          outline: none;
          box-shadow: inset 0 0 2px 0 $orange;
        }
      }
      button{
        @include outline-none;
        @include user-input-box;
        width: 100%;
        border: 0;
        box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
        background: $orange;
        color: $white;
      }
    }
  }
}
</style>