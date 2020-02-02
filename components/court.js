import React, { useState } from 'react';
import styled from 'styled-components';

const Index = ({ now, click, cnt }) => {
  const name = ['왼쪽 쇼트 코너', '페인트존', '오른쪽 쇼트 코너', '왼쪽 엘보',
    '키', '오른쪽 엘보', '왼쪽 코너', '오른쪽 코너', '왼쪽 윙',
    '탑', '오른쪽 윙'];
  const ball = [[-293, 103], [-25, 175], [243, 103], [-270, 315], [-25, 370], [220, 315],
    [-446, 103], [396, 103], [-380, 440], [-25, 540], [330, 440]];
  const courtPath = [
    'M -394,0 L -394,256 L -142,256 L -142,0 L -394,0',
    'M -142,0 L -142,342 L 142,342 L 142,0 L 306,0',
    'M 394,0 L 394,256 L 142,256 L 142,0 L 394,0',
    'M -142,495 L -142,256 L -394,256 A 427.5,427.5 1 0,0 -142,495',
    'M 142,495 L 142,342 L -142,342 L -142,495 A 427.5,427.5 1 0,0 142,495',
    'M 142,495 L 142,256 L 394,256 A 427.5,427.5 1 0,1 142,495',
    'M -448,0 L -448,256 L -394,256 L -394,0 L -448,0',
    'M 448,0 L 448,256 L 394,256 L 394,0 L 448,0',
    'M -204,467 L -266,614 L -448,614 L -448,256 L -394,256 A 427.5,427.5 0 0,0 -204,467',
    'M -204,467 L -266,614 L 266,614 L 204,467 A 427.5,427.5 0 0,1 -204,467',
    'M 204,467 L 266,614 L 448,614 L 448,256 L 394,256 A 427.5,427.5 0 0,1 204,467',
  ];


  const tohex = (num) => {
    let tmp = parseInt((num * 256).toFixed(), 10);
    if (tmp > 0xff) tmp = 0xff;
    return (tmp < 0x10 ? '0' : '') + tmp.toString(16);
  };

  const color = (where) => {
    const tmp = (cnt[where][0] === 0 && cnt[where][0] === 0)
      ? 0 : (cnt[where][0] / (cnt[where][0] + cnt[where][1]));
    return `#${tohex((tmp > 0.5) ? (1.5 - tmp) : 1)}${tohex((tmp > 0.5) ? 1 : (0.5 + tmp))}80`;
  };

  return (
    <Court>
      <svg className="canvas" viewBox="-450 -5 896 624" width={'min(80%, 400px)'}>
        {courtPath.map((path, idx) => <path d={path} fill={color(idx)} onClick={() => click(idx)} />)}

        <line x1="-448" x2="448" y1="0" y2="0" className="normalline" />
        <line x1="-448" x2="-142" y1="256" y2="256" className="dashline" />
        <line x1="142" x2="448" y1="256" y2="256" className="dashline" />
        <line x1="-142" x2="-142" y1="342" y2="495" className="dashline" />
        <line x1="142" x2="142" y1="342" y2="495" className="dashline" />
        <line x1="204" x2="266" y1="467" y2="614" className="dashline" />
        <line x1="-204" x2="-266" y1="467" y2="614" className="dashline" />
        <line x1="-394" x2="-394" y1="0" y2="256" className="normalline" />
        <line x1="394" x2="394" y1="0" y2="256" className="normalline" />
        <line x1="-142" x2="-142" y1="0" y2="342" className="normalline" />
        <line x1="142" x2="142" y1="0" y2="342" className="normalline" />
        <line x1="-142" x2="142" y1="342" y2="342" className="normalline" />
        <line x1="-52" x2="52" y1="70.2" y2="70.2" className="normalline" />
        <line x1="-70" x2="-70" y1="75.6" y2="98.1" className="normalline" />
        <line x1="70" x2="70" y1="75.6" y2="98.1" className="normalline" />
        <circle cx="0" cy="84.6" r="13.5" className="curveline" />
        <path d="M -70, 98.1 A 70,70 1 0,0 70,98.1" className="curveline" />
        <path d="M -108, 342 A 108,108 1 0,1 108,342" strokeDasharray="22.5" className="curveline" />
        <path d="M -108, 342 A 108,108 1 0,0 108,342" className="curveline" />
        <path d="M -394, 256 A 427.5,427.5 1 0,0 394,256" className="curveline" />

        <image href="./static/titleIcon.svg" x={ball[now][0]} y={ball[now][1]} height="50" />
      </svg>
      <div className="title">{name[now]}</div>
    </Court>
  );
};
export default Index;

const Spot=styled.div`
  position: relative;
  top:-5%;
  width: 100%;
  text-align: center;
  display: block;
  font-size: 20px;
`
const Court = styled.div`
  .canvas {
    margin-top: 10px;
    margin-bottom: 10px; 
    margin-left: calc(50% - min(40%, 200px));
  }
  .title {
    text-align: center;
    font-size: 20px;
  }
  .normalline {
    stroke: black;
    stroke-width: 2;
    shape-rendering: crispedges;
  }
  .dashline {
    stroke: black;
    stroke-dasharray: 6;
    stroke-width: 2;
    opacity: 0.5;
    shape-rendering: crispedges;
  }
  .curveline {
    stroke: black;
    stroke-width: 2;
    z-index: -1;
    fill: none;
  }
`;
