import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;  
  background-color: ${props => props.theme.primary.dark};
  height: 100%;
`;


export const RightSideContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxlarge};

  padding: 32px 24px;
  max-width: 420px;
  width: 100%;
  height:100%;
  background-color: ${props => props.theme.backgroundColor};

  .title {
    font-size: 36px;
    text-align: center;
  }
  
  .login-box {

    width: 100%;
    
    &__title {
      font-size: 24px;
      font-weight: 500;
    }

    
    &__login {
      color: ${props => props.theme.gray[900]};
      margin-top: ${props => props.theme.spacing.large};

      font-size: 14px;
      a {
        color: ${props => props.theme.primary.light};
        font-weight: bold;
        
      }
    }
  }

`