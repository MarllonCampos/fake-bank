import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;  
  background-color: ${props => props.theme.primary.dark};
  height: 100%;
`;


export const RightSideContainer = styled.div`
  align-items: center;
  
  padding: 32px 24px;
  max-width: 420px;
  width: 100%;
  height:100%;
  background-color: ${props => props.theme.backgroundColor};

  .title {
    font-size: 36px;
    text-align: center;
  }
  .login-title {
    font-size: 24px;
  }

`