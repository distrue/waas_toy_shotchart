import React, { useState } from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const { positionList, index, selectPosition } = props;
  const makeColor = (i) => {
    let red = 0;
    let green = 0;
    if (positionList[i].ratio >= 0.5) {
      green = 255;
      red = 510 * (1 - positionList[i].ratio);
    } else {
      red = 255;
      green = 510 * positionList[i].ratio;
    }
    return `rgba(${red},${green},0,0.5)`;
  };
  const onClick = (index) => {
    selectPosition(index);
  };
  const positionName = () => {
    switch (index) {
    case 0:
      return '왼쪽 코너';
      break;
    case 1:
      return '왼쪽 쇼트 코너';
      break;
    case 2:
      return '페인트존';
      break;
    case 3:
      return '오른쪽 쇼트 코너';
      break;
    case 4:
      return '오른쪽 코너';
      break;
    case 5:
      return '왼쪽 윙';
      break;
    case 6:
      return '탑';
      break;
    case 7:
      return '오른쪽 윙';
      break;
    case 8:
      return '왼쪽 엘보';
      break;
    case 9:
      return '키';
      break;
    case 10:
      return '오른쪽 엘보';
      break;
    }
  };
  return (
    <Container>
      <Court>
        <Ball><img id={`ball${index}`} src="/static/titleIcon.png" alt="ball" width="25px" /></Ball>
        <svg>
          <g>
            <LeftConner onClick={onClick} index={0} color={makeColor(0)} />
            <LeftShortConner onClick={onClick} index={1} color={makeColor(1)} />
            <PaintZone onClick={onClick} index={2} color={makeColor(2)} />
            <RightShortConner onClick={onClick} index={3} color={makeColor(3)} />
            <RightConner onClick={onClick} index={4} color={makeColor(4)} />
            <LeftWing onClick={onClick} index={5} color={makeColor(5)} />
            <Top onClick={onClick} index={6} color={makeColor(6)} />
            <RightWing onClick={onClick} index={7} color={makeColor(7)} />
            <LeftElbow onClick={onClick} index={8} color={makeColor(8)} />
            <Key onClick={onClick} index={9} color={makeColor(9)} />
            <RightElbow onClick={onClick} index={10} color={makeColor(10)} />
          </g>
          <Lines />
        </svg>
      </Court>
      <span>{positionName()}</span>
    </Container>
  );
};
export default Index;

const Container = styled.div`
  display: flex; flex-direction: column;
  text-align: center;
  span {
    position: relative; top: 310px;
    font-size: 15pt;
    font-weight: bold;
  }
`;
const Court = styled.div`
  width: 400px; height: 280px;
  position: absolute; left: 50%; transform: translate(-50%, 0%);
  margin-top: 20px;
  svg{
    width: 400px; height: 280px;
    border-top: 1px solid #000;
  }
`;
const Ball = styled.div`
    #ball0 {
        position: absolute; left: 0px; top: 45px;
    }
    #ball1 {
        position: absolute; left: 70px; top: 45px;
    }
    #ball2 {
        position: absolute; left: 188px; top: 82px;
    }
    #ball3 {
        position: absolute; right: 70px; top: 45px;
    }
    #ball4 {
        position: absolute; right: 0px; top: 45px;
    }
    #ball5 {
        position: absolute; left: 35px; top: 180px;
    }
    #ball6 {
        position: absolute; left: 188px; top: 250px;
    }
    #ball7 {
        position: absolute; right: 35px; top: 180px;
    }
    #ball8 {
        position: absolute; left: 80px; top: 150px;
    }
    #ball9 {
        position: absolute; left: 188px; top: 175px;
    }
    #ball10 {
        position: absolute; right: 80px; top: 150px;
    }
`;
const Lines = () => (
  <g>
    <path d="M25 0 V 120" stroke="black" />
    <path d="M135 0 V 160" stroke="black" />
    <path d="M265 0 V 160" stroke="black" />
    <path d="M375 0 V 120" stroke="black" />
    <path d="M0 120 H 135" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />
    <path d="M135 160 H 265" stroke="black" />
    <path d="M265 120 H 400" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />

    <path d="M175 30 H 225" stroke="black" />
    <circle cx="200" cy="35" r="5" stroke="black" fill="none" />
    <path d="M165 40 C 165 90 235 90 235 40" stroke="black" fill="none" />
    <path d="M165 32 V 40" stroke="black" />
    <path d="M235 32 V 40" stroke="black" />

    <path d="M25 120 C 75 280 320 280 375 120" stroke="black" fill="none" />
    <path d="M135 160 V 230" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />
    <path d="M265 160 V 230" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />

    <path d="M105 216 L 85 280" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />
    <path d="M295 216 L 315 280" stroke="black" style={{ strokeDasharray: 3, opacity: 0.5 }} />

    <path d="M150 160 A 50 50 0 0 0 250 160" stroke="black" fill="none" />
    <path d="M150 160 A 50 50 0 0 1 250 160" stroke="black" fill="none" style={{ strokeDasharray: 10 }} />
  </g>
);
const LeftConner = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M0 0 V 120 H 25 V 0 H 0" fill={color} onClick={handleClick} />
  );
};
const LeftShortConner = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M25 0 V 120 H 135 V 0 H 25" fill={color} onClick={handleClick} />
  );
};
const PaintZone = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M135 0 V 160 H 265 V 0 H 135" fill={color} onClick={handleClick} />
  );
};
const RightShortConner = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M265 0 V 120 H 375 V 0 H 265" fill={color} onClick={handleClick} />
  );
};
const RightConner = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M375 0 V 120 H 400 V 0 H 375" fill={color} onClick={handleClick} />
  );
};
const LeftElbow = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M25 120 C 50 200 110 220 135 230 V 120 Z " fill={color} onClick={handleClick} />
  );
};
const Key = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M135 230 C 170 242 230 242 265 230 V 160 H 135 Z" fill={color} onClick={handleClick} />
  );
};
const RightElbow = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M375 120 C 345 200 285 220 265 230 V 120 Z " fill={color} onClick={handleClick} />
  );
};
const LeftWing = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M0 120 H 25 C 50 200 110 217 105 216 L 85 280 H 0 Z" fill={color} onClick={handleClick} />
  );
};
const RightWing = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M400 120 H 375 C 345 200 285 218 295 217 L 315 280 H 400 Z" fill={color} onClick={handleClick} />
  );
};
const Top = (props) => {
  const { onClick, index, color } = props;
  const handleClick = () => {
    onClick(index);
  };
  return (
    <path d="M105 216 L 85 280 H 315 L 295 216 C 240 245 155 248 105 216" fill={color} onClick={handleClick} />
  );
};
