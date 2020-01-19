import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
    const {position, onMadePlus, onMadeMinus, onFailPlus, onFailMinus} = props;
    const handleMadePlus = () => {
        onMadePlus();
        console.log(position)
    }
    const handleMadeMinus = () => {
        onMadeMinus();
        console.log(position)
    }
    const handleFailPlus = () => {
        onFailPlus();
        console.log(position)
    }
    const handleFailMinus = () => {
        onFailMinus();
        console.log(position)
    }
    return (
        <ButtonContainer>
            <Box>
                <Button>
                    <button onClick={handleMadePlus}>+</button>
                    <span>{position.made}</span>
                    <button onClick={handleMadeMinus}>-</button>
                </Button>
                <span>MADE</span>
            </Box>
            <Box>
                <Button>
                    <button onClick={handleFailPlus}>+</button>
                    <span>{position.fail}</span>
                    <button onClick={handleFailMinus}>-</button>
                </Button>
                <span>FAIL</span>
            </Box>
        </ButtonContainer>
    )
}
export default Index;

const ButtonContainer = styled.div`
    width: 50%;
    position: absolute; left: 50%; transform: translate(-50%,0); top: 550px;
    display: flex; flex-direction: row; justify-content: space-between;
`;
const Box = styled.div`
    display: flex; flex-direction: column; align-items: center;
    font-size: 20pt;
`;
const Button = styled.div`
    width: 100px; height: 150px;
    border: 1px solid #000;
    border-radius: 20px;
    display: flex; flex-direction: column; align-items: center;
    button {
        width: 100%; height: 33%;
        font-size: 20pt;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    span {
        width: 100%; height: 33%; text-align: center;
        margin-top: 7%;
    }
`;
