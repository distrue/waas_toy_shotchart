import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    //score, index, up, down
    const nowScore=[...props.score];
    const errorAlert=()=>{
        alert('you can\'t go down under zero');
    }
    return (
        <ButtonContainer>
            <div className="nosee"/>
            <div className="nosee"/>
            <div className="see">
                <div className="clickable">
                    <button className="inButtonA" onClick={()=>props.up('made',props.index)}>+</button>
                    <div className="inButton">{nowScore[props.index].made}</div>
                    <button className="inButtonA" onClick={(nowScore[props.index].made)===0?()=>errorAlert():()=>props.down('made',props.index)}>-</button>
                </div>
                <div className="text">made</div>
            </div>
            <div className="nosee"/>
            <div className="nosee"/>
            <div className="nosee"/>
            <div className="see">
                <div className="clickable">
                    <button className="inButtonA" onClick={()=>props.up('fail',props.index)}>+</button>
                    <div className="inButton">{nowScore[props.index].fail}</div>
                    <button className="inButtonA" onClick={(nowScore[props.index].fail===0)?()=>errorAlert():()=>props.down('fail',props.index)}>-</button>
                </div>
                <div className="text">fail</div>
            </div>
            <div className="nosee"/>
            <div className="nosee"/>
        </ButtonContainer>
    )
}
export default Index;

const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
.nosee{
    width:11.1%;
}
.see{
    display:flex;
    flex-direction:column;
    width:11.1%;
}
.see .clickable{
    height:200px;
    border:2px solid black;
    border-radius:30px;
}
.see .text{
    text-align:center;
    font-size:30px;
}
.clickable .inButton{
    height:33.3%;
    text-align:center;
    vertical-align:middle;
    border:none;
    background-color:white;
    border-radius:30px;
    font-size:30px;
    width:100%
}
.clickable .inButtonA{
    height:33.3%;
    text-align:center;
    vertical-align:middle;
    border:none;
    background-color:white;
    border-radius:30px;
    font-size:30px;
    cursor: pointer;
    width:100%;
}
`;
