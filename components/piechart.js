import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  if(props.index<3||props.index>8) const point=3;
  else const point=2;
  return (
    <PieChart>
      <Block>
      
      </Block>
    </PieChart>
  );
}
export default Index;

const Block=styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: block;
  margin: 0% calc(16.67% - 50px);
`
const PieChart = styled.div`
`;
