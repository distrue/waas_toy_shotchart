import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';

const Index = () => {
    const [index,setIndex]=useState(11);
    const [spotname,setSpotname]=useState('탑');
    const [made,setMade]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [fail,setFail]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [rate,setRate]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    
    const updateIndex=(num)=>{
        setIndex(num);
    }
    const updateSpot=(name)=>{
        setSpotname(name);
    }
    const updateMade=(value)=>{
        const newRate=[...rate];
        const newMade=[...made];
        if(value+newMade[index]<0) console.log('0미만으로 입력할 수 없습니다.')
        else newMade[index]=newMade[index]+value;
        setMade(newMade);
        newRate[index]=made[index]/(made[index]+fail[index]);
        setRate(newRate);
    }

    const updateFail=(value)=>{
        const newFail=[...fail];
        const newRate=[...rate];
        if(value+newFail[index]<0) console.log('0미만으로 입력할 수 없습니다.')
        else newFail[index]=newFail[index]+value;
        setFail(newFail);
        newRate[index]=made[index]/(made[index]+fail[index]);
        setRate(newRate);
    }
    
    
    
    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <Court updateSpot={updateSpot} spot={spotname} updateIndex={updateIndex} rate={rate} ></Court>
            <Piechart index={index}  made={made} fail={fail} ></Piechart>
            <CountButton index={index} made={made} fail={fail} updateMade={updateMade} updateFail={updateFail} ></CountButton>            
            
        </Background>
    );
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
    text-align: center;
`

