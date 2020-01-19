import React from 'react';
import styled from 'styled-components';


const Index = (props) => {
  let nowPoint;
  if(props.index>=3&&props.index<=8) nowPoint=2;
  else nowPoint=3;
  let sumMade, sumFail;
  let totalMade=0,totalFail=0;
  for(let i=1;i<12;i++)
  {
    totalMade+=props.made[i];
    totalFail+=props.fail[i];
  }
  const pointRate=()=>{
    if(nowPoint===2){
      sumMade=props.made[3]+props.made[4]+props.made[5]+props.made[6]+props.made[7]+props.made[8];
      sumFail=props.fail[3]+props.fail[4]+props.fail[5]+props.fail[6]+props.fail[7]+props.fail[8];
    }
    else{
      sumMade=props.made[1]+props.made[2]+props.made[9]+props.made[10]+props.made[11];
      sumFail=props.fail[1]+props.fail[2]+props.fail[9]+props.fail[10]+props.fail[11];
    }
    if(sumMade===0&&sumFail===0) return 0;
    else return sumMade/(sumMade+sumFail);
  }
  const totalRate=()=>{
    if(totalMade==0&&totalFail==0) return 0;
    else return totalMade/(totalMade+totalFail);
  }
  const Color=(rate)=>{
    let perc=rate*100;
    let r,g,b=0;
    if(perc<=50){
      r=255;
      g=102+Math.round(3.06*perc);
      b=144;
    }
    else{ 
      r=102+Math.round(3.06*(100-perc));
      g=255;
      b=Math.round(2.04*(100-perc))
    }
    let h=r*0x10000+g*0x100+b*0x1;
    return '#'+('000000'+h.toString(16)).slice(-6);
  }
  return (
    <PieChart>
      <Block>
      <div className="pointRate">
        <div className="pie " background={Color(pointRate)}>
          <div className="center"></div>
          <div className="text" >
            {pointRate().toString().slice(0,4)}
          </div>
        </div>
        <div className="title">
        {nowPoint}점 성공률
        </div>
      </div>
      <div className="pointRate">
        <div className="pie" background={Color(pointRate)}>
          <div className="center"></div>
          <div className="text">
            {props.rate[props.index].toString().slice(0,4)}
          </div>
        </div>
        <div className="title">
          Spot 성공률
        </div>
      </div>
      <div className="pointRate">
        <div className="pie" background="red">
          <div className="center"></div>
          <div className="text">
            {totalRate().toString().slice(0,4)}
          </div>
        </div>
        <div className="title">
          총 성공률
        </div>
      </div>
      </Block>
    </PieChart>
  );
}
export default Index;

const Block=styled.div`

  position: relative;
  width: calc(100% - 40px);
  height: 100px;
  display: flex;
  margin: 40px 20px;
  .pointRate{
    position: relative;
    width: 100px;
    height: 100px;
    display: block;
    margin: 0% calc(16.67% - 50px);
  }
  .spotRate{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0% calc(16.67% - 50px);
  }
  .totalRate{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0% calc(16.67% - 50px);
  }
  .pie{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.3s ease 0s;
    background: black;
  }
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255);
    border-radius: 50%;
  }
  .text{
    position: absolute;
    top: 35%;
    width: 100%;
    height: 30%;
    text-align: center;
    font-size: 20px;
    cursor: text;
  }
  .title{
    position: relative;
    text-align: center;
    width: 120%;
    right: 20%;
    font-size: 15px;
    font-weight: 100;
    margin: 10px;
  }
`

const PieChart = styled.div`
`;
