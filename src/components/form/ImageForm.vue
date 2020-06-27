<template>
  <div class="image-form">
    <h2>바이크의</h2>
    <h2>이미지를 상세히 올려주세요!</h2>
    <br>
    <div class="image-btn-box">
      <input type="file" 
        ref="imageInput" 
        multiple 
        hidden 
        accept="image/*"
        @change="onChangeImages">
      <button type="button" @click="onClickImageUpload">이미지 업로드</button>
    </div>
    <div class="image-contain" v-if="imageUrl">
      <a class="image-box" 
        @click="onClickImageDelete" 
        v-for="image in imageUrl" 
        :key="image.index"
        :id="image">
        <img :src="image"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'ImageForm',
  props:{
    images:{
      type:Array
    }
  },
  methods:{
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      const files = e.target.files
      for(let file of files){
        this.imageUrl.push(URL.createObjectURL(file));
        this.$emit('onImage', this.imageUrl)
      }
    },
    onClickImageDelete(e){
      const image = e.target.id;
      const targetIndex = this.imageUrl.findIndex(v => v == image)
      this.imageUrl.splice(targetIndex, 1);
      this.$emit('onImage', this.imageUrl)
    }
  },
  created(){
    this.imageUrl = [...this.images]
  },
  data(){
    return{
      imageUrl:[],
    }
  },
}
</script>

<style lang="scss">
@import '@/style/index.scss';
.image-form{
  @include register-form-contain;

  .image-btn-box{
    margin-bottom: 1rem;
    button{
      @include buyk-btn;
    }
  }
  .image-contain{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .image-box{
      @include outline-none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 45%;
      height: 18rem;
      margin-right: 5%;
      margin-bottom: 5%;
      border: 0;
      border-radius: 10px;
      box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.35);
      background: $gray;
      img{
        max-width: 100%;
        height: auto;
      }
      &:hover{
        img{
          opacity: 0.8;
        }
        &::after{
          content: "X";
          position: absolute;
          color: $white;
          font-size: 5rem;
        }
      }
      &:active{
        img{
          opacity: 0.8;
        }
        &::after{
          content: "X";
          position: absolute;
          color: $orange;
          font-size: 5rem;
        }
      }
    }
  }
}
</style>