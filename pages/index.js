import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';
import Axios from 'axios';

const Index = () => {
  const [two, setTwo] = useState(0.0);
  const [three, setThree] = useState(0.0);
  const [tot, setTot] = useState(0.0);
  const [cnt, setcnt] = useState(new Array(11).fill([0, 0]));
  const [now, setnow] = useState(0);
  const backUrl = "http://localhost:4000";

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
    // Axios.put(`${backUrl}/api/score`, {made: 1, area: 3})
    //   .then(ans => {
    //     console.dir(ans);
    //   });
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
    Axios.put(`${backUrl}/score`, {area: now, ismade: 1, isbutton: 1, num: up?1:-1 })
      .then(ans => {
        console.dir(ans);
      });
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
    Axios.put(`${backUrl}/score`, {area: now, ismade: 0, isbutton: 1, num: up?1:-1 })
      .then(ans => {
        console.dir(ans);
      });
  };

  const numberpad = (what, num) => {
    const Num = Number(num);
    setcnt(cnt.map(([succ, fail], idx) => {
      if (idx === now) return what ? [Num, fail] : [succ, Num];
      return [succ, fail];
    }));
    percentupd();
    Axios.put(`${backUrl}/score`, {area: now, ismade: what, isbutton: 0, num: Num })
      .then(ans => {
        console.dir(ans);
      });
  };

  useEffect(() => {
    // const tmp = localStorage.getItem('shot');
    // localStorage 부분을 제거하고, backend server에서 요청을 받아올 계획입니다.
    
    const amel = (val, idx, callback) => {
      Axios.get(`${backUrl}/score?area=${idx}`)
        .then(ans => {
          val[idx] = ans['data']['score'];
          callback(val, idx-1);
        });
    };

    let tmp = new Array(11);
    amel(tmp, 10, (result, idx) => {
      amel(result, idx, (result, idx) => {
        amel(result, idx, (result, idx) => {
          amel(result, idx, (result, idx) => {
            amel(result, idx, (result, idx) => {
              amel(result, idx, (result, idx) => {
                amel(result, idx, (result, idx) => {
                  amel(result, idx, (result, idx) => {
                    amel(result, idx, (result, idx) => {
                      amel(result, idx, (result, idx) => {
                        amel(result, idx, (result, idx) => {
                          console.log(result);
                          setcnt(result);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    // for(let i = 11 ; i-- ; ) {
    //   Axios.get(`${backUrl}/score?area=${i}`)
    //     .then(ans => {
    //       setcnt(cnt.map( (val, idx) => {
    //         if(idx === i) return ans['data']['score'];
    //         return val;
    //       }));
    //       console.log(i, ans['data']['score']);
    //       // ans에 어떤 response가 오는지 반드시 확인해 보세요
    //       // cnt에 저장할 것
    //     });
    //   // useEffect 함수는 await이 금지입니다, 우회하여 함수를 작성하는 방법도 있으나, 지금과 같은 간단한 logic에는 필요해 보이지 않아 Promise-then으로 구현합니다.
    // }
    
    // if (tmp !== 'undefined') {
    //   setcnt(JSON.parse(tmp));
    // }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('shot', JSON.stringify(cnt));
  //   percentupd();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cnt]);

  return (
    <div>
      <HeaderStyle>
        <div className="text">My Shot Chart</div>
      </HeaderStyle>
      
      <Court now={now} cnt={cnt} click={courtclick} />

      <Piechart
        point={now > 5 ? 3 : 2}
        score={now > 5 ? three : two}
        spot={(cnt[now][0] === 0 && cnt[now][1] === 0) ? 0
          : (cnt[now][0] / (cnt[now][0] + cnt[now][1]))}
        tot={tot}
      />

      <CountButton
        made={cnt[now][0]}
        fail={cnt[now][1]}
        madeclick={madebutton}
        failclick={failbutton}
        numpad={numberpad}
      />
    </div>
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
