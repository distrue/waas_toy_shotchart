import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';

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
    if (tmp !== 'undefined') {
      setcnt(JSON.parse(tmp));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shot', JSON.stringify(cnt));
    percentupd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnt]);

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
