
// 매물이 지난 시간 확인하는 함수

export const checkTime = (start) => {
    const old = new Date(start+"z");
    const now = new Date();
    const gap = parseInt((now.getTime()-old.getTime())/10000);
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
