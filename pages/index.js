import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { CountButton, Piechart, Court } from '../components';

const Index = () => {
    const [nowIndex,changeIndex]=useState(0);
    const [score,changeScore]=useState([{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0},{made:0,fail:0}]);
    
    const initialState=()=>{
        if(localStorage.length()===0)return;
        else{
            for(let i=0;i<11;i++){
                //changeScore(window.localStorage.getItem(,))
            }
            useEffect(()=>{
                for(let i=0;i<11;i++){
                    window.localStorage.setItem(i,JSON.stringify(score[i]));
                }
            });
        }
    }

    /*for(let i=0;i<11;i++){
        localStorage.setItem(i,JSON.stringify(score[i]));
    }*/

    /*let check=0;
    if(score[nowIndex].made<0){
        console.log('you can\'t go under zero(made)');
        check=1;
    }
    if(score[nowIndex].fail<0){
        console.log('you can\'t go under zero(fail)');
        check=2;
    }
    useEffect(()=>{
        if(check===1)score[nowIndex].made=0;
        if(check===2)score[nowIndex].fail=0;
    });*/

    const indexChange = (index) => {
        changeIndex(index);
        console.log(score);
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
                {nowIndex}
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
}
`

