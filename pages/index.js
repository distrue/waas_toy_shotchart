import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { CountButton, Court, Piechart } from '../components';
import axios from 'axios'
const DB_URL = 'http://localhost:4000/score'

const Index = () => {
    const [index, setIndex] = useState(0);
    const [positionList, setPositionList] = useState(initList);
    
    useEffect(() => {
        for(let i=0; i<11; i++){
            let list = initList;
            axios.get(`${DB_URL}/${i}`)
            .then((res) => {
                console.log(i,': ',res.data.score);
                list[i].made=res.data.score[0];
                list[i].fail=res.data.score[1];
                setRatio(list[i]);
                setPositionList([...list])
            })
            .catch((err) => {
                if(err.response.data.reason==='Not Found'){
                    axios.put(`${DB_URL}/${i}`,{
                        made: 0,
                        fail: 0
                    })
                    .then((res) => {
                        list[i].made=0;
                        list[i].fail=0;
                        setRatio(list[i]);
                        setPositionList([...list])
                    })
                }
            })
        }
    },[]);
    const setRatio = (pos) => {
        const made = pos.made;
        const fail = pos.fail;
        if(fail) pos.ratio = made/(made+fail);
        else if(made==0) pos.ratio = 0;
        else pos.ratio = 1;
    }
    const selectPosition = (index) => {
        setIndex(index);
    }
    const onMadeChange = async (changed) => {
        let newPositionList = positionList;
        if('0'<=changed) newPositionList[index].made = changed;
        else return;
        await setRatio(newPositionList[index]);
        await setPositionList([...newPositionList]);
        await axios.put(`${DB_URL}/${index}`,{
            made: newPositionList[index].made,
            fail: newPositionList[index].fail
        })
    }
    const onFailChange = (changed) => {
        let newPositionList = positionList;
        if('0'<=changed) newPositionList[index].fail = changed;
        else return;
        setRatio(newPositionList[index]);
        setPositionList([...newPositionList]);
        axios.put(`${DB_URL}/${index}`,{
            made: newPositionList[index].made,
            fail: newPositionList[index].fail
        })
=======
import { CountButton, Piechart, Court } from '../components';
import Axios from 'axios';

const Index = () => {
  const [two, setTwo] = useState(0.0);
  const [three, setThree] = useState(0.0);
  const [tot, setTot] = useState(0.0);
  const [cnt, setcnt] = useState(new Array(11).fill([0, 0]));
  const [now, setnow] = useState(0);

  const percentupd = () => {
    let twomade = 0;
    let twofail = 0;
    let threemade = 0;
    let threefail = 0;

    cnt.forEach(([succ, fail], idx) => {
      if (idx < 6) {
        twomade += succ;
        twofail += fail;
      } else {
        threemade += succ;
        threefail += fail;
      }
    });

    if (twomade + twofail > 0) {
      setTwo(twomade / (twomade + twofail));
    } else setTwo(0);

    if (threemade + threefail > 0) {
      setThree(threemade / (threemade + threefail));
    } else setThree(0);

    if (twomade + twofail + threemade + threefail > 0) {
      setTot((twomade + threemade) / (twomade + twofail + threemade + threefail));
    } else setTot(0);

    // update된 결과를 backend에 입력해야 함
    Axios.put(`${backUrl}/api/score`, {made: 1, area: 3})
      .then(ans => {
        console.dir(ans);
      });
  };

  const courtclick = (where) => {
    setnow(where);
  };

  const madebutton = (up) => {
    setcnt(cnt.map(([succ, fail], idx) => {
      if (idx === now) {
        if (up) return [succ + 1, fail];
        if (succ > 0) return [succ - 1, fail];
      }
      return [succ, fail];
    }));
    percentupd();
  };

  const failbutton = (up) => {
    setcnt(cnt.map(([succ, fail], idx) => {
      if (idx === now) {
        if (up) return [succ, fail + 1];
        if (fail > 0) return [succ, fail - 1];
      }
      return [succ, fail];
    }));
    percentupd();
  };

  const numberpad = (what, num) => {
    const Num = Number(num);
    setcnt(cnt.map(([succ, fail], idx) => {
      if (idx === now) return what ? [Num, fail] : [succ, Num];
      return [succ, fail];
    }));
    percentupd();
  };

  useEffect(() => {
    const tmp = localStorage.getItem('shot');
    // localStorage 부분을 제거하고, backend server에서 요청을 받아올 계획입니다.
    for(idx of [...Array(10).keys()]) {
      Axios.get(`${backUrl}/api/score?area=${0}`)
        .then(ans => {
          console.dir(ans); // ans에 어떤 response가 오는지 반드시 확인해 보세요
          // cnt에 저장할 것
        });
      // useEffect 함수는 await이 금지입니다, 우회하여 함수를 작성하는 방법도 있으나, 지금과 같은 간단한 logic에는 필요해 보이지 않아 Promise-then으로 구현합니다.
    }
    if (tmp !== 'undefined') {
      setcnt(JSON.parse(tmp));
>>>>>>> e8505ba3ed25a7fedd124cd4ad2a370e13f58c2d
    }

    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <Court positionList={positionList} index={index} selectPosition={selectPosition}/>
            <Piechart positionList={positionList} index={index}/>
            <CountButton position={positionList[index]} onMadeChange={onMadeChange} onFailChange={onFailChange}/>
        </Background>
    )
}
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
`
const Background = styled.div`
`
const initList = [{
    name: 'LeftConner',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'LeftShortConner',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'PaintZone',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'RightShortConner',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'RightConner',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'LeftWing',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'Top',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'RightWing',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'LeftElbow',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'Key',
    made: 0,
    fail: 0,
    ratio: 0
}, {
    name: 'RightElbow',
    made: 0,
    fail: 0,
    ratio: 0
}];