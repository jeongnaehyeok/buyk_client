<template>
  <div class="register-form-contain">
    <p>바이크의</p>
    <p>이미지를 상세히 올려주세요!</p>
    <br>
    <div class="image-btn-box">
      <input type="file" 
        ref="imageInput" 
        multiple hidden 
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
@import '@/style/registerform.scss';
</style>