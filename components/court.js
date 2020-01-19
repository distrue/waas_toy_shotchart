import React, { useState } from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const Color=(index)=>{
    let perc=props.rate[index]*100;
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
  return (
    <Court>
      
      <svg viewBox="-20 17 940 667"  height="auto"> 
        <g z-index="1">
          <line x1="0" x2="900" y1="50" y2="50" stroke-width="2" stroke="black"></line>
          <line x1="396" x2="504" y1="120.2" y2="120.2" stroke="black"></line>
          <line x1="378" x2="378" y1="125.6" y2="148.1" stroke="black"></line>
          <line x1="522" x2="522" y1="125.6" y2="148.1" stroke="black"></line>
          <circle cx="450" cy="134.6" r="13.5" fill="none" stroke="black"></circle>
          <path d="M378,148.1A72,72 1 0,0 522,148.1"  fill="none" stroke="black"></path>
          <line x1="0" x2="50" y1="306" y2="306"  stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="846" x2="896" y1="306" y2="306" stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5" ></line>
          <line x1="246" x2="186" y1="522" y2="664"  stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="654" x2="714" y1="522" y2="664"  stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="594" x2="846" y1="306" y2="306" stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="50" x2="306" y1="306" y2="306" stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="54" x2="54" y1="50" y2="306" stroke="black"></line>
          <line x1="846" x2="846" y1="50" y2="306" stroke="black"></line>
          <path d="M306,50L306,392L594,392L594,50L306,50" stroke="black" fill="none"/>
          <line x1="306" x2="306" y1="392" y2="545" stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <line x1="594" x2="594" y1="392" y2="545" stroke="black" stroke-dasharray="6, 6" stroke-width="2" opacity="0.5"></line>
          <path d="M54,305A427.5,427.5 1 0,0 846,305" stroke="black" fill="none"></path>
          <path d="M342,392A108,108 1 0,1 558,392" stroke-dasharray="22.5, 22.5" stroke="black" fill="none"></path>
          <path d="M342,392A108,108 1 0,0 558,392" stroke="black" fill="none"></path>
          <path d="M306,50L306,392L594,392L594,50L306,50" fill="none"/>
          <path d="M342,392A108,108 1 0,0 558,392" fill="none"></path>
          <path d="M342,392A108,108 1 0,0 558,392" fill="none"></path>
          <path d="M342,392A108,108 1 0,1 558,392" fill="none" stroke-Dasharray="22.5 22.5"></path>
          <path d="M54,305A427.5,427.5 1 0,0 846,305" fill="none"></path>
          <path d="M0,50L0,306L54,306L54,50L0,50" z-index="-1" fill={Color(1)} onClick={()=>{props.updateSpot('왼쪽 코너'); props.updateIndex(1) }} ></path>
 
        </g>
        <path d="M846,50L846,306L900,306L900,50L846,50" z-index="-1" fill={Color(2)} onClick={()=>{props.updateSpot('오른쪽 코너'); props.updateIndex(2) }}></path>
        <path d="M54,50L54,306L306,306L306,50L54,50" z-index="-1" fill={Color(3)} onClick={()=>{props.updateSpot('왼쪽 쇼트 코너'); props.updateIndex(3) }}></path>
        <path d="M594,50L594,306L846,306L846,50L594,50" z-index="-1" fill={Color(4)} onClick={()=>{props.updateSpot('오른쪽 쇼트 코너'); props.updateIndex(4) }}></path>
        <path d="M306,50L306,392L594,392L594,50L306,50" z-index="-1" fill={Color(5)} onClick={()=>{props.updateSpot('페인트 존'); props.updateIndex(5) }}></path>
        <path d="M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545" z-index="-1" fill={Color(6)} onClick={()=>{props.updateSpot('키'); props.updateIndex(6) }}></path>
        <path d="M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545" z-index="-1" fill={Color(7)} onClick={()=>{props.updateSpot('왼쪽 엘보'); props.updateIndex(7) }}></path>
        <path d="M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545" z-index="-1" fill={Color(8)} onClick={()=>{props.updateSpot('오른쪽 엘보'); props.updateIndex(8) }}></path>
        <path d="M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521" z-index="-1" fill={Color(9)} onClick={()=>{props.updateSpot('왼쪽 윙'); props.updateIndex(9) }}></path>
        <path d="M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521" z-index="-1" fill={Color(10)} onClick={()=>{props.updateSpot('오른쪽 윙'); props.updateIndex(10) }}></path>
        <path d="M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521" z-index="-1" fill={Color(11)} onClick={()=>{props.updateSpot('탑'); props.updateIndex(11) }}></path>

      </svg>
      <Spot>
      {props.spot}
      </Spot>
    </Court>

  );
}
export default Index;

const Spot=styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: block;
  font-size: 20px;
`
const Court = styled.div`

  margin-top : 20px;
  
  max-height:300px;
  position: relative;


  top: 0px;
  left: 0%;

  width: 100vw;
  height: 40vh;
  
`;
