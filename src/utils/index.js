
// 매물이 지난 시간 확인하는 함수

export const checkTime = (time) => {
    const old = new Date(time);
    const now = new Date();
    const gap = parseInt((now.getTime()-old.getTime())/1000);
    if(gap<60){
      return `${gap} 초 전`;
    }
    else if(gap<3600){
      return `${parseInt(gap / 60)} 분 전`;
    }
    else if(gap<86400){
      return `${parseInt(gap / 3600)} 시간 전`;
    }
    else if(gap<2592000){
      return `${parseInt(gap / 86400)} 일 전`;
    }
    else{
      return `${parseInt(gap / 2592000)} 달 전`;
    }
}

export const checkPrice = (price) => {
  // return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return Number(price).toLocaleString()
}

export const range = (start, end) => {
  const arr = [];
  const length = end - start; 
  for (let i = 0; i <= length; i++) { 
      arr[i] = start;
      start++;
  }
  return [...arr.reverse()];
}
