import React from 'react';
import styled from 'styled-components';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Index = (props) => {
  const name = ["왼쪽 쇼트 코너", "페인트존", "오른쪽 쇼트 코너", "왼쪽 엘보",
                "키", "오른쪽 엘보", "왼쪽 코너", "오른쪽 코너", "왼쪽 윙",
                "탑", "오른쪽 윙"];
  const ball = [ [-293,103], [-25,175], [243,103], [-270,315], [-25,370], [220,315],
                [-446,103], [396,103], [-380,440], [-25,540], [330,440] ];
  const dashline = {
    stroke: "black", strokeDasharray: 6, strokeWidth:2, opacity:0.5, shapeRendering: "crispedges"
  };
  const normalline = {
    stroke: "black", strokeWidth: 2, shapeRendering: "crispedges"
  };
  const curveline = {
    stroke: "black", strokeWidth: 2, zIndex: -1, fill: "none"
  };
  const tohex = num => {
    let tmp = parseInt((num*256).toFixed());
    if(tmp>0xff) tmp = 0xff;
    return (tmp<0x10 ? "0" : "" ) + tmp.toString(16);
  };

  const color = where => {
    const tmp = (props.cnt[where][0] === 0 && props.cnt[where][0] === 0) ?
      0 : (props.cnt[where][0] / (props.cnt[where][0]+props.cnt[where][1])) ;
    return "#" + tohex((tmp>0.5)?(1.5-tmp):1) + tohex((tmp>0.5)?1:(0.5+tmp)) + "80";
  };
  return (
    <Court>
      <svg viewBox="-450 -5 896 624" width = {"min(80%, 400px)"} 
        style = {{marginTop: "10px", marginBottom: "10px", marginLeft: "calc(50% - min(40%, 200px))" }}>
        
        <path d="M -394,0 L -394,256 L -142,256 L -142,0 L -394,0"
          fill = {color(0)} onClick = {()=>props.click(0)}/>
          <path d="M 394,0 L 394,256 L 142,256 L 142,0 L 394,0"
            fill = {color(2)} onClick = {()=>props.click(2)}/>
        <path d="M -142,0 L -142,342 L 142,342 L 142,0 L 306,0"
          fill = {color(1)} onClick = {()=>props.click(1)}/>
        <path d="M -142,495 L -142,256 L -394,256 A 427.5,427.5 1 0,0 -142,495"
          fill = {color(3)} onClick = {()=>props.click(3)}/>
        <path d="M 142,495 L 142,256 L 394,256 A 427.5,427.5 1 0,1 142,495"
          fill = {color(5)} onClick = {()=>props.click(5)}/>
        <path d="M 142,495 L 142,342 L -142,342 L -142,495 A 427.5,427.5 1 0,0 142,495"
          fill = {color(4)} onClick = {()=>props.click(4)}/>
        <path d="M -448,0 L -448,256 L -394,256 L -394,0 L -448,0" 
          fill = {color(6)} onClick = {()=>props.click(6)}/>
        <path d="M 448,0 L 448,256 L 394,256 L 394,0 L 448,0" 
          fill = {color(7)} onClick = {()=>props.click(7)}/>
        <path d="M -204,467 L -266,614 L -448,614 L -448,256 L -394,256 A 427.5,427.5 0 0,0 -204,467"
          fill = {color(8)} onClick = {()=>props.click(8)}/>
        <path d="M 204,467 L 266,614 L 448,614 L 448,256 L 394,256 A 427.5,427.5 0 0,1 204,467"
          fill = {color(10)} onClick = {()=>props.click(10)}/>
        <path d="M -204,467 L -266,614 L 266,614 L 204,467 A 427.5,427.5 0 0,1 -204,467"
          fill = {color(9)} onClick = {()=>props.click(9)}/>
        
        <line x1="-448" x2="448" y1="0" y2="0" style={normalline}/>
        <line x1="-448" x2="-142" y1="256" y2="256" style={dashline}/>
        <line x1="142" x2="448" y1="256" y2="256" style={dashline}/>
        <line x1="-142" x2="-142" y1="342" y2="495" style={dashline}/>
        <line x1="142" x2="142" y1="342" y2="495" style={dashline}/>
        <line x1="204" x2="266" y1="467" y2="614" style={dashline}/>
        <line x1="-204" x2="-266" y1="467" y2="614" style={dashline}/>
        <line x1="-394" x2="-394" y1="0" y2="256" style={normalline}/>
        <line x1="394" x2="394" y1="0" y2="256" style={normalline}/>
        <line x1="-142" x2="-142" y1="0" y2="342" style={normalline}/>
        <line x1="142" x2="142" y1="0" y2="342" style={normalline}/>
        <line x1="-142" x2="142" y1="342" y2="342" style={normalline}/>
        <line x1="-52" x2="52" y1="70.2" y2="70.2" style={normalline}/>
        <line x1="-70" x2="-70" y1="75.6" y2="98.1" style={normalline}/>
        <line x1="70" x2="70" y1="75.6" y2="98.1" style={normalline}/>
        <circle cx="0" cy="84.6" r="13.5" style = {curveline}/>
        <path d="M -70, 98.1 A 70,70 1 0,0 70,98.1" style = {curveline}/>
        <path d="M -108, 342 A 108,108 1 0,1 108,342" strokeDasharray = "22.5" style = {curveline}/>
        <path d="M -108, 342 A 108,108 1 0,0 108,342" style = {curveline}/>
        <path d="M -394, 256 A 427.5,427.5 1 0,0 394,256" style = {curveline}/>

        <image href = "./static/titleIcon.svg" 
          x = {ball[props.now][0]} y = {ball[props.now][1]} height = "50" />      
      </svg>
      <div className = "title">{name[props.now]}</div>
    </Court>
  );
}
export default Index;

const Court = styled.div`
  .title {
    text-align: center;
    font-size: 20px;
  }
`;
