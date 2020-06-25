# buyk

## 기술 스택
- Vue.js 2.9.3
  - [vue-carousel](https://github.com/SSENSE/vue-carousel)
- WebPack 3.6.0
- axios
- Vuex
- SCSS

# 이슈
- mixin과 veriables파일을 전역으로 불러오는 이슈
  - 사용하는 파일마다 `index.scss`를 `import`해서 사용하는 것으로 임시 해결
- 검색창 포커싱이 안풀리는 이슈
  - 입력창을 다시 토글하는 것으로 해결
- 장고의 서버시간과 자바스크립트에서 사용하는 시간이 달라서 `-전` 표시에 오류가 있음
