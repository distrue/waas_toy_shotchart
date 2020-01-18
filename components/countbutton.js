import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    //score, index, up, down
    const nowScore=[...props.score];
    
    return (
        <ButtonContainer>
            <div className="nosee"/>
            <div className="see">
                <button className="plus" onClick={()=>props.up('made',props.index)}>+</button>
                <div className="value">{nowScore[props.index].made}</div>
                <button className="minus" onClick={(nowScore[props.index].made)===0?'':()=>props.down('made',props.index)}>-</button>
            </div>
            <div className="nosee"/>
            <div className="nosee"/>
            <div className="see">
                <button className="plus" onClick={()=>props.up('fail',props.index)}>+</button>
                <div className="value">{nowScore[props.index].fail}</div>
                <button className="minus" onClick={(nowScore[props.index].fail===0)?'':()=>props.down('fail',props.index)}>-</button>
            </div>
            <div className="nosee"/>
        </ButtonContainer>
    )
}
export default Index;

const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
.nosee{
    width:16.6%;
}
.see{
    display:flex;
    flex-direction:column;
    width:16.6%;
    height:200px;
    border-style:solid;
}
.see .plus{
    height:33.3%;
    text-align:center;
    vertical-align:middle;
}
.see .value{
    height:33.3%;
    text-align:center;
    vertical-align:middle;
}
.see .minus{
    height:33.3%;
    text-align:center;
    vertical-align:middle;
}
`;
