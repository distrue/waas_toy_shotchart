import React from 'react';
import styled from 'styled-components';

const Index = (props) => {

  const PieChart = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    .piepie {
      position: relative;
      left: calc(50% - 50px);
      border-radius: 50%;
      width: 100px;
      height: 100px;
      
    }
    .score {
      background: conic-gradient(
        rgb(${((props.score>0.5)?(2-2*props.score):1)*255},
          ${((props.score>0.5)?1:(props.score*2))*255},0) ${props.score*360}deg,
        white ${props.score*360}deg 360deg
      );
    }
    .spot {
      background: conic-gradient(
        rgb(${((props.spot>0.5)?(2-2*props.spot):1)*255},
          ${((props.spot>0.5)?1:(props.spot*2))*255},0) ${props.spot*360}deg,
        white ${props.spot*360}deg 360deg
      );
    }
    .tot {
      background: conic-gradient(
        rgb(${((props.tot>0.5)?(2-2*props.tot):1)*255},
          ${((props.tot>0.5)?1:(props.tot*2))*255},0) ${props.tot*360}deg,
        white ${props.tot*360}deg 360deg
      );
    }
    .center {
      position: relative;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      background: white;
      border-radius: 50%;
    }
    .big {
      width: 33.33%;
    }
    .text {
      position: absolute;
      top: 35%;
      left: 30%;
      font-size: 20px;
      text-align: center;
    }
    .title {
      text-align: center;
      margin-top: 10px;
    }
  `;

  return (
    <PieChart>
      <div className = "big">
        <div className = "piepie score">
          <div className = "center"/>
          <div className = "text">{props.score.toFixed(2)}</div>
        </div>
        <div className = "title">{props.point}점 성공률</div>
      </div>
      <div className = "big">
        <div className = "piepie spot">
          <div className = "center"/>
          <div className = "text">{props.spot.toFixed(2)}</div>
        </div>
        <div className = "title">Spot 성공률</div>
      </div>
      <div className = "big">
        <div className = "piepie tot">
          <div className = "center"/>
          <div className = "text">{props.tot.toFixed(2)}</div>
        </div>
        <div className = "title">총 성공률</div>
      </div>
    </PieChart>
  );
}
export default Index;
