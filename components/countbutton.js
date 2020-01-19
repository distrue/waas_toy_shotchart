import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    const newMade=props.made;
    const newFail=props.fail;
    const index=props.index;
    return (
        <ButtonContainer>
            <Button>
            <div onClick={()=>{props.updateMade(1)}}>
            +
            </div>
            <div height="30%">
                {newMade[index]}
            </div>
            <div onClick={()=>{props.updateMade(-1)}}>
            -
            </div>
            <Title>MADE</Title>
            </Button>
            <Button>
            <div onClick={()=>{props.updateFail(1)}}>
            +
            </div>
            <div>
                {newFail[index]}
            </div>
            <div onClick={()=>{props.updateFail(-1)}}>
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
`
const Title=styled.div`
    position: relative;
    top: 150%;
    width: 100%;
    text-align: center;
    letter-spacing: 5px;
    text-indent: 2.5px;
`
const ButtonContainer = styled.div`
    position: relative;
    width: calc(100% - 40px);
    height: 20%;
    display: flex;
    margin: 30px 20px 20px;
`;
