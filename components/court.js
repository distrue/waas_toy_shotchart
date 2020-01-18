import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  let portion=[0,0,0,0,0,0,0,0,0,0,0];
  for(let i=0;i<11;i++){
    if(props.score[i].made+props.score[i].fail===0){portion[i]=0;continue;}
    portion[i]=props.score[i].made*100/(props.score[i].made+props.score[i].fail);
  }

  const percToColour=(perc)=>{
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

  const Court = styled.div`
    display:flex;
    flex-direction:row;
    .realcourt{
      max-width: 1000px;
      position: relative;
      top: 0px;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100vw;
      height: 40vh;
      path{
        opacity:0.5;
      }
    }
  `;

  const indexChange=(index)=>{
    props.change(index);
  }

  return (
    <Court>
      <svg viewBox="-20 17 940 667" fill="none" className="realcourt" strokeWidth="5px">
        <path d="M0,50L0,306L54,306L54,50L0,50" stroke="black" fill={percToColour(portion[0])} onClick={()=>indexChange(0)}/>
        <path d="M846,50L846,306L900,306L900,50L846,50" stroke="black" fill={percToColour(portion[1])} onClick={()=>indexChange(1)}/>
        <path d="M54,50L54,306L306,306L306,50L54,50" stroke="black" fill={percToColour(portion[2])} onClick={()=>indexChange(2)}/>
        <path d="M594,50L594,306L846,306L846,50L594,50" stroke="black" fill={percToColour(portion[3])} onClick={()=>indexChange(3)}/>
        <path d="M306,50L306,392L594,392L594,50L306,50" stroke="black" fill={percToColour(portion[4])} onClick={()=>indexChange(4)}/>
        <path d="M594,545L594,392L306,392L306,545A427.5,427.5 1 0,0 594,545" stroke="black" fill={percToColour(portion[5])} onClick={()=>indexChange(5)}/>
        <path d="M306,545L306,306L54,306A427.5,427.5 1 0,0 306,545" stroke="black" fill={percToColour(portion[6])} onClick={()=>indexChange(6)}/>
        <path d="M594,545L594,306L846,306A427.5,427.5 0 0,1 594,545" stroke="black" fill={percToColour(portion[7])} onClick={()=>indexChange(7)}/>
        <path d="M246,521L186,664L0,664L0,306L54,306A427.5,427.5 0 0,0 246,521" stroke="black" fill={percToColour(portion[8])} onClick={()=>indexChange(8)}/>
        <path d="M654,521L714,664L900,664L900,306L846,306A427.5,427.5 0 0,1 654,521" stroke="black" fill={percToColour(portion[9])} onClick={()=>indexChange(9)}/>
        <path d="M246,521L186,664L714,664L654,521A427.5,427.5 0 0,1 246,521" stroke="black" fill={percToColour(portion[10])}className="colour10" onClick={()=>indexChange(10)}/>

        <image href="/static/titleIcon.svg" x="2" y="140" width="50" height="50" index="zero" visibility={props.index===0?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="848" y="140" width="50" height="50" index="one" visibility={props.index===1?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="140" y="180" width="50" height="50" index="two" visibility={props.index===2?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="700" y="180" width="50" height="50" index="three" visibility={props.index===3?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="420" y="180" width="50" height="50" index="four" visibility={props.index===4?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="420" y="400" width="50" height="50" index="five" visibility={props.index===5?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="160" y="360" width="50" height="50" index="six" visibility={props.index===6?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="660" y="360" width="50" height="50" index="seven" visibility={props.index===7?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="80" y="500" width="50" height="50" index="eight" visibility={props.index===8?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="770" y="500" width="50" height="50" index="nine" visibility={props.index===9?'visible':'hidden'}/>
        <image href="/static/titleIcon.svg" x="420" y="590" width="50" height="50" index="ten" visibility={props.index===10?'visible':'hidden'}/>
      </svg>
    </Court>
  );
}
export default Index;


