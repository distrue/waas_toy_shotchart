import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const {positionList, index} = props;
  const score = () => {
    if(index==0) return 3;
    else if(4<=index&&index<=7) return 3;
    else return 2;
  }
  const spotRatio = positionList[index].ratio
  const allRatio = () => {
    let made = 0;
    let fail = 0;
    for(let i=0; i<11; i++) made += positionList[i].made;
    for(let i=0; i<11; i++) fail += positionList[i].fail;
    if(fail) return made/(made+fail);
    else if(made) return 1;
    else return 0;
  }
  const scoreRatio = () => {
    let made = 0;
    let fail = 0;
    if(score()==3) {
      for(let i=0; i<=7; i++){
        if(i==1||i==2||i==3) continue;
        made += positionList[i].made;
        fail += positionList[i].fail;
      }
    } else {
      for(let i=1; i<=10; i++){
        if(i==4||i==5||i==6||i==7) continue;
        made += positionList[i].made;
        fail += positionList[i].fail;
      }
    }
    if(fail) return made/(made+fail);
    else if(made) return 1;
    else return 0;
  }
  const degree = (ratio, xflag) => {
    if(xflag) return Math.cos(Math.PI*(360*ratio-91)/180)*40 + 50;
    else return Math.sin(Math.PI*(360*ratio-91)/180)*40 + 50;
  }
  const largeCircleFlag = (ratio) => {
    if(ratio>0.5) return 1;
    else return 0;
  }
  const drawCircle = (ratio) => {
    let red = 0;
    let green = 0;
    if(ratio>=0.5){
      green = 255;
      red = 510*(1-ratio);
    } else {
      red = 255;
      green = 510*ratio;
    }
    //TODO gradient
    return(
      <svg>
        <path 
          d={
            `M50 10 A 40 40 0 ${largeCircleFlag(ratio)} 1 ${degree(ratio, 1)} ${degree(ratio, 0)}`}
          stroke={`rgba(${red},${green},0,1)`}
          fill='transparent'
          strokeWidth='10px'
        />
        <path 
          d={
            `M${degree(ratio, 1)} ${degree(ratio, 0)} A 40 40 0 0 1 ${degree(ratio+0.01, 1)} ${degree(ratio+0.01, 0)}`}
          stroke={`rgba(${red},${green},0,1)`}
          fill='transparent'
          strokeWidth='10px'
        />
      </svg>
    );
  }
  return (
    <PieChart>
      <Box>
        <Graph>
          {drawCircle(scoreRatio())}
          <span>{scoreRatio().toFixed(2)}</span>
        </Graph>
        <span>{score()}점 성공률</span>
      </Box>
      <Box>
        <Graph>
          {drawCircle(spotRatio)}
          <span>{spotRatio.toFixed(2)}</span>
        </Graph>
        <span>Spot 성공률</span>
      </Box>
      <Box>
        <Graph>
          {drawCircle(allRatio())}
          <span>{allRatio().toFixed(2)}</span>
        </Graph>
        <span>총 성공률</span>
      </Box>
    </PieChart>
  );
}
export default Index;

const PieChart = styled.div`
  width: 70%;
  position: absolute; left: 50%; transform: translate(-50%,0); top: 400px;
  display: flex; flex-direction: row; justify-content: space-between;
`;
const Box = styled.div`
    display: flex; flex-direction: column; align-items: center;
`;
const Graph = styled.div`
    width: 100px; height: 100px;
    border: 1px solid #000;
    border-radius: 20px;
    display: flex; flex-direction: column; align-items: center;
    svg {
      width: 100px; height: 100px;
      position: relative; 
    }
    span {
      position: absolute; top: 40px;
    }
`;
