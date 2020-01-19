import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    const newMade=props.made;
    const newFail=props.fail;
    const index=props.index;
    return (
        <ButtonContainer>
            <Button>
            <div className="plusButton" onClick={()=>{props.updateMade(1)}}>
            +
            </div>
            <div className="text">
                {newMade[index]}
            </div>
            <div className="minusButton" onClick={()=>{props.updateMade(-1)}}>
            -
            </div>
            <Title>MADE</Title>
            </Button>
            <Button>
            <div className="plusButton" onClick={()=>{props.updateFail(1)}}>
            +
            </div>
            <div className="text">
                {newFail[index]}
            </div>
            <div className="minusButton" onClick={()=>{props.updateFail(-1)}}>
            -
            </div>
            <Title>FAIL</Title>
            </Button>
            
            
        </ButtonContainer>
    )
}
export default Index;

const Button=styled.div`
    position: relative;
    width: 100px;
    height: 100%;
    cursor: pointer;
    margin: 20px calc(25% - 50px);
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    text-align:center;
    font-size : 30px;
    .plusButton{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 35%;
    }
    .minusButton{
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 35%;
    }
    .text{
        position: absolute;
        top: 35%;
        width: 100%;
        height: 30%;
        text-align: center;
        font-size: 30px;
        cursor: text;
    }
`
const Title=styled.div`
    font-size:18px;
    position: relative;
    top: 100%;
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    text-indent: 2.5px;
`
const ButtonContainer = styled.div`
    position: relative;
    width: calc(100% - 40px);
    height: 20vh;
    display: flex;
    margin: 30px 20px 20px;
`;