import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const { position, onMadeChange, onFailChange } = props;
  const handleMadeChange = (e) => {
    let { value } = e.target;
    value = value.replace(/(^0+)/, '');
    if (value == '') onMadeChange(0);
    if (value[value.length - 1] >= '0' && value[value.length - 1] <= '9') onMadeChange(value);
    console.log(value);
  };
  const handleFailChange = (e) => {
    let { value } = e.target;
    value = value.replace(/(^0+)/, '');
    if (value == '') onFailChange(0);
    if (value[value.length - 1] >= '0' && value[value.length - 1] <= '9') onFailChange(value);
    console.log(value);
  };
  return (
    <ButtonContainer>
      <Box>
        <Button>
          <button onClick={() => onMadeChange(position.made + 1)}>+</button>
          <input value={position.made} onChange={(e) => { handleMadeChange(e); }} />
          <button onClick={() => onMadeChange(position.made - 1)}>-</button>
        </Button>
        <span>MADE</span>
      </Box>
      <Box>
        <Button>
          <button onClick={() => onFailChange(position.fail + 1)}>+</button>
          <input value={position.fail} onChange={(e) => { handleFailChange(e); }} />
          <button onClick={() => onFailChange(position.fail - 1)}>-</button>
        </Button>
        <span>FAIL</span>
      </Box>
    </ButtonContainer>
  );
};
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
    input {
        background-color: transparent;
        border: none;
        width: 100%; height: 33%; text-align: center;
        margin-top: 7%;
        font-size: 20pt;
    }
`;
