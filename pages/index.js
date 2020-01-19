import React, { useState } from 'react';
import styled from 'styled-components';
import { CountButton, Court, Piechart } from '../components';

const Index = () => {
    const [index, setIndex] = useState(0);
    const [positionList, setPositionList] = useState([{
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
    }])
    
    const selectPosition = (index) => {
        setIndex(index);
    }
    const onMadePlus = () => {
        let newPositionList = positionList;
        newPositionList[index].made = positionList[index].made+1;
        if(newPositionList[index].fail) newPositionList[index].ratio = newPositionList[index].made/(newPositionList[index].made+newPositionList[index].fail);
        else if(newPositionList[index].made==0) newPositionList[index].ratio=0;
        else newPositionList[index].ratio = 1;
        setPositionList([...newPositionList]);
    }
    const onMadeMinus = () => {
        let newPositionList = positionList;
        if(positionList[index].made) newPositionList[index].made = positionList[index].made-1;
        else return;
        if(newPositionList[index].fail) newPositionList[index].ratio = newPositionList[index].made/(newPositionList[index].made+newPositionList[index].fail);
        else if(newPositionList[index].made==0) newPositionList[index].ratio=0;
        else newPositionList[index].ratio = 1;
        setPositionList([...newPositionList]);
    }
    const onFailPlus = () => {
        let newPositionList = positionList;
        newPositionList[index].fail = positionList[index].fail+1;
        newPositionList[index].ratio = newPositionList[index].made/(newPositionList[index].made+newPositionList[index].fail);
        setPositionList([...newPositionList]);
    }
    const onFailMinus = () => {
        let newPositionList = positionList;
        if(positionList[index].fail)newPositionList[index].fail = positionList[index].fail-1;
        else return;
        if(newPositionList[index].fail) newPositionList[index].ratio = newPositionList[index].made/(newPositionList[index].made+newPositionList[index].fail);
        else if(newPositionList[index].made==0) newPositionList[index].ratio=0;
        else newPositionList[index].ratio = 1;
        setPositionList([...newPositionList]);
    }
    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <Court list={positionList} index={index} selectPosition={selectPosition}/>
            <Piechart positionList={positionList} index={index}/>
            <CountButton position={positionList[index]} onMadePlus={onMadePlus} onMadeMinus={onMadeMinus} onFailPlus={onFailPlus} onFailMinus={onFailMinus}/>
        </Background>
    )
}
//TODO positionList local storige export
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
