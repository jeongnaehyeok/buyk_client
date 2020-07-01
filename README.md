# buyk

## 기술 스택
- Vue.js 2.9.3
  - [vue-carousel](https://github.com/SSENSE/vue-carousel)
- WebPack 3.6.0
- axios
- Vuex
- SCSS

# 이슈
- mixin과 veriables파일을 전역으로 불러오지 못하는 이슈
  - 사용하는 파일마다 `index.scss`를 `import`해서 사용하는 것으로 임시 해결
- 검색창 포커싱이 안풀리는 이슈
  - 입력창을 다시 토글하는 것으로 해결
- 장고의 서버시간과 자바스크립트에서 사용하는 시간이 달라서 `-전` 표시에 이슈가 있음
- vue의 [배열 변경 감지](https://kr.vuejs.org/v2/guide/list.html#%EA%B0%9D%EC%B2%B4-%EB%B3%80%EA%B2%BD-%EA%B0%90%EC%A7%80%EC%97%90-%EA%B4%80%ED%95%9C-%EC%A3%BC%EC%9D%98%EC%82%AC%ED%95%AD)로 Register 페이지에 특정한 값들이 전달이 안되는 이슈
  - 알수없는 코드로 실행이 되서 못찾았던 이슈, 코드를 다시 읽으면서 찾게 되었음
  - `map` 함수도 사용하면 배열 변경감지가 일어나는 것 같음. 로직 변경으로 해결
- 필터에서 글자를 누르면 토글이 안되는 오류
- Detail Page에서 payment_method에 있는 데이터를 로딩하지 못해서 발생하는 오류
  - payment_method state를 따로 생성해서 임시로 해결

# 구현 못함
- double slide를 구현하고 싶었으나 값에따라 스타일 시트를 바꾸는 문제를 해결하지 못함
  - input[type:number]으로 구현함
- 검색어를 넘겨서 검색하는 기능 서버쪽에서 구현을 못했기 때문에 구현하지 못함