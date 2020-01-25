import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CountButton, Court, Piechart } from '../components';

const DB_URL = 'http://localhost:3000/score';

const Index = () => {
  const [index, setIndex] = useState(0);
  const [positionList, setPositionList] = useState(initList);

  useEffect(() => {
    for (let i = 0; i < 11; i++) {
      const list = initList;
      axios.get(`${DB_URL}/${i}`)
        .then((res) => {
          console.log(i, ': ', res.data.score);
          list[i].made = res.data.score[0];
          list[i].fail = res.data.score[1];
          setRatio(list[i]);
          setPositionList([...list]);
        })
        .catch((err) => {
          if (err.response.data.reason === 'Not Found') {
            axios.put(`${DB_URL}/${i}`, {
              made: 0,
              fail: 0,
            })
              .then((res) => {
                list[i].made = 0;
                list[i].fail = 0;
                setRatio(list[i]);
                setPositionList([...list]);
              });
          }
        });
    }
  }, []);
  const setRatio = (pos) => {
    const { made } = pos;
    const { fail } = pos;
    if (fail) pos.ratio = made / (made + fail);
    else if (made == 0) pos.ratio = 0;
    else pos.ratio = 1;
  };
  const selectPosition = (index) => {
    setIndex(index);
  };
  const onMadeChange = async (changed) => {
    const newPositionList = positionList;
    if (changed >= '0') newPositionList[index].made = changed;
    else return;
    await setRatio(newPositionList[index]);
    await setPositionList([...newPositionList]);
    await axios.put(`${DB_URL}/${index}`, {
      made: newPositionList[index].made,
      fail: newPositionList[index].fail,
    });
  };
  const onFailChange = (changed) => {
    const newPositionList = positionList;
    if (changed >= '0') newPositionList[index].fail = changed;
    else return;
    setRatio(newPositionList[index]);
    setPositionList([...newPositionList]);
    axios.put(`${DB_URL}/${index}`, {
      made: newPositionList[index].made,
      fail: newPositionList[index].fail,
    });
  };

  return (
    <Background>
      <HeaderStyle>
        <div className="text">My Shot Chart</div>
      </HeaderStyle>
      <Court positionList={positionList} index={index} selectPosition={selectPosition} />
      <Piechart positionList={positionList} index={index} />
      <CountButton position={positionList[index]} onMadeChange={onMadeChange} onFailChange={onFailChange} />
    </Background>
  );
};
export default Index;

const HeaderStyle = styled.div`
    position: relative;
    top: 0px;
    width: 100%;
    height: 35px;
    background-color: #ff5722;
    opacity: 0.8;
    z-index: 1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    padding-top: 20px;
    .text{
        width: 100%;
        font-size: 30px;
        font-family: 'Bebas Neue', cursive;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.75;
        letter-spacing: 1.5px;
        text-align: center;
        color: #ffffff;
    }
`;
const Background = styled.div`
`;
const initList = [{
  name: 'LeftConner',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'LeftShortConner',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'PaintZone',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'RightShortConner',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'RightConner',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'LeftWing',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'Top',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'RightWing',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'LeftElbow',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'Key',
  made: 0,
  fail: 0,
  ratio: 0,
}, {
  name: 'RightElbow',
  made: 0,
  fail: 0,
  ratio: 0,
}];
