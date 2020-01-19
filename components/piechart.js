import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  //현재위치 계산
  let madeNum=props.score[props.index].made; // 현재 위치에서의 성공 횟수
  let totNum=props.score[props.index].made+props.score[props.index].fail; // 현재 위치에서의 전체 횟수
  
  let spotPerc=madeNum/totNum; // 현재 위치에서의 성공확률
  if(totNum===0)spotPerc=0;

  let nowPoint; // 현재 위치가 몇점슛인지 확인
  if(props.index>=2&&props.index<=7)nowPoint=0;
  else nowPoint=1;
  
  //2점위치 계산
  let point2Perc,tot2Point=0,tot2Try=0;// 2점위치 성공확률, 2점위치 성공횟수, 2점위치 전체횟수
  for(let i=2;i<=7;i++){
    tot2Point+=props.score[i].made;
    tot2Try+=props.score[i].made+props.score[i].fail;
  }
  point2Perc=tot2Point/tot2Try;
  if(tot2Try===0)point2Perc=0;

  //전체위치 계산
  let pointPerc,totPoint=0,totTry=0;// 전체 성공확률, 전체 성공횟수, 전체횟수
  for(let i=0;i<11;i++){
    totPoint+=props.score[i].made;
    totTry+=props.score[i].made+props.score[i].fail;
  }
  pointPerc=totPoint/totTry;
  if(totTry===0)pointPerc=0;

  //3점위치 계산
  let point3Perc=(totPoint-tot2Point)/(totTry-tot2Try);//3점 성공확률
  if(totTry-tot2Try===0)point3Perc=0;

  //3점확률=(전체성공-2점성공)/(전체횟수-2점횟수)

  const underDot=(perc)=>{
    return perc.toFixed(2);
  }

  spotPerc=underDot(spotPerc);
  point2Perc=underDot(point2Perc);
  pointPerc=underDot(pointPerc);
  point3Perc=underDot(point3Perc);

  const percToColour=(perc)=>{
    perc*=100;
    let r,g,b=0;
    if(perc<50){
      r=255;
      g=Math.round(5.1*perc);
    }else{
      g=255;
      r=Math.round(510-5.10*perc);
    }
    let h=r*0x10000+g*0x100+b*0x1;
    return '#'+('000000'+h.toString(16)).slice(-6);
  }

  const PieChart = styled.div`
    display:flex;
    flex-direction:row;
    .charts{
      display:flex;
      flex-direction:column;
      width:33.3%;
      height:200px;
      .pointshot{
        stroke-dasharray:${nowPoint?point3Perc*628:point2Perc*628} 628;
      }
      .spotshot{
        stroke-dasharray:${spotPerc*628} 628;
      }
      .allshot{
        stroke-dasharray:${pointPerc*628} 628;
      }
    }
  `;

  return (
    <PieChart>
      <svg height="350" width="350" viewBox="0 0 350 350" className="charts">
        <circle r="100" cx="150" cy="150" fill="white" />
        <text x="100" y="170" fontSize="50px" fontStyle="oblique">{nowPoint?point3Perc:point2Perc}</text>
        <circle r="100" cx="-130" cy="150" fill="transparent"
          className="pointshot"
          stroke={percToColour(nowPoint?point3Perc:point2Perc)}
          strokeWidth="30"
          transform="rotate(-90) translate(-20)" />
          <text x="145" y="320">{nowPoint?'3점':'2점'}</text>
      </svg>
      
      <svg height="350" width="350" viewBox="0 0 350 350" className="charts">
        <circle r="100" cx="150" cy="150" fill="white" />
        <text x="100" y="170" fontSize="50px" fontStyle="oblique">{spotPerc}</text>
        <circle r="100" cx="-130" cy="150" fill="transparent"
          className="spotshot"
          stroke={percToColour(spotPerc)}
          strokeWidth="30"
          transform="rotate(-90) translate(-20)" />
          <text x="145" y="320">현재위치</text>
      </svg>

      <svg height="350" width="350" viewBox="0 0 350 350" className="charts">
        <circle r="100" cx="150" cy="150" fill="white" />
        <text x="100" y="170" fontSize="50px" fontStyle="oblique">{pointPerc}</text>
        <circle r="100" cx="-130" cy="150" fill="transparent"
          className="allshot"
          stroke={percToColour(pointPerc)}
          strokeWidth="30"
          transform="rotate(-90) translate(-20)" />
          <text x="145" y="320">전체</text>
      </svg>
    </PieChart>
  );
  
}
export default Index;


