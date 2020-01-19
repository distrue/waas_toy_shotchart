import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';

let localImsiScore=[{}];
const Index = () => {
    const position=['Left Corner','Right Corner','Left Short Corner','Right Short Corner','Paint Zone','Key','Left Elbow','Right Elbow','Left Wing','Right Wing','Top'];
    const [time,changeTime]=useState(0);
    const [nowIndex,changeIndex]=useState(0);
    const [score,changeScore]=useState([{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0}]);
    useEffect(()=>{
        console.log(time);
        let spliced=[...score];
        if(localStorage.length===0){
            for(let i=0;i<11;i++){
                localStorage.setItem(i,JSON.stringify(spliced[i]));
            }
        }
        else{
            if(time<=0){
                for(let i=0;i<11;i++){
                    localImsiScore[i]=JSON.parse(localStorage.getItem(i));
                    //console.log(localImsiScore[i]);
                }
                spliced.splice(0,11,localImsiScore[0],localImsiScore[1],localImsiScore[2],localImsiScore[3],localImsiScore[4],localImsiScore[5],localImsiScore[6],localImsiScore[7],localImsiScore[8],localImsiScore[9],localImsiScore[10]);
                changeScore(spliced);
                console.log(spliced);
            }
            else{
                for(let i=0;i<11;i++){
                    localStorage.setItem(i,JSON.stringify(spliced[i]));
                }
            }
        }
        changeTime(time+1);
        console.log(score);
    },[score]);
    
    const indexChange = (index) => {
        changeIndex(index);
        //console.log(score);
    }

    const scoreUp=function(type,index){
        if(type==='made'){
            const newScore=[...score];
            newScore[index].made++;
            changeScore(newScore);
        }
        if(type==='fail'){
            const newScore=[...score];
            newScore[index].fail++;
            changeScore(newScore);
        }
    }
    const scoreDown=function(type,index){
        if(type==='made'){
            const newScore=[...score];
            newScore[index].made--;
            changeScore(newScore);
        }
        if(type==='fail'){
            const newScore=[...score];
            newScore[index].fail--;
            changeScore(newScore);
        }
    }
    return (
        <Background>
            <HeaderStyle>
                <div className="text">My Shot Chart</div>
            </HeaderStyle>
            <Court score={score} index={nowIndex} change={indexChange}/>
            <div className="position">
                {position[nowIndex]}
            </div>
            <Piechart score={score} index={nowIndex}/>
            <CountButton score={score} index={nowIndex} up={scoreUp} down={scoreDown}/>
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
.position{
    text-align:center;
    font-size:30px;
}
`

