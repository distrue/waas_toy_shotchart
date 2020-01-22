import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';

const Index = () => {
    let two = 0.0, three = 0.0, tot = 0.0;
    const [cnt, setcnt] = useState([ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ]);
    const [now, setnow] = useState(0);

    useEffect( () => {
        const tmp = localStorage.getItem('shot');
        if(tmp && tmp !== "undefined") {
            setcnt(JSON.parse(tmp));
        }
    }, []);

    useEffect( () => {
        localStorage.setItem('shot', JSON.stringify(cnt));
        let twomade = 0, twofail = 0, threemade = 0, threefail = 0;
        cnt.forEach( (val, idx) => {
            if(idx < 6) twomade += val[0], twofail += val[1];
            else threemade += val[0], threefail += val[1];
        });
        if(twomade !==0 || twofail !== 0)
            two = twomade / (twomade + twofail);
        else two = 0;
        if(threemade !==0 || threemade !== 0)
            three = threemade / (threemade + threefail);
        else three = 0;
        if(twomade !==0 || twofail !== 0 || threemade !== 0 || threefail !== 0)
            tot = (twomade + threemade) / (twomade + twofail + threemade + threefail);
        else tot = 0;
        console.log(two,three,tot);
    }, [cnt]);

    const courtclick = (where) => {
        setnow(where);
    };
    const madebutton = (up) => {
        setcnt(cnt.map( (val, idx) => {
            if(idx === now) {
                if(up) return [ val[0] + 1, val[1] ];
                if(val[0] !== 0) return [ val[0] - 1, val[1] ];
            }
            return val;
        }));
    };
    const failbutton = (up) => {
        setcnt(cnt.map( (val, idx) => {
            if(idx === now) {
                if(up) return [ val[0], val[1] + 1 ];
                if(val[1] !== 0 ) return [ val[0], val[1] - 1 ];
            }
            return val;
        }));
    };
    const numberpad = (what, num) => { /* what=1-> made, else fail */
        num = Number(num);
        setcnt(cnt.map( (val, idx) => {
            if(idx === now)
                return what ? [num, val[1]] : [val[0], num] ;
            return val;
        }));
    };

    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <Court now = {now} cnt = {cnt} click = {courtclick}/>

            <Piechart point = {now>5?3:2} score = {now>5 ? three : two}
                spot = {(cnt[now][0] === 0 && cnt[now][1] === 0) ? 0 :
                    (cnt[now][0] / ( cnt[now][0] + cnt[now][1] ))}
                tot = {tot}/>
            
            <CountButton made = {cnt[now][0]} fail = {cnt[now][1]}
                madeclick = {madebutton} failclick = {failbutton}
                numpad = {numberpad}/>
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
    
`
const Background = styled.div`
`

