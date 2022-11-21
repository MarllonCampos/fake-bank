import styled, { keyframes } from 'styled-components';

const round = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction :column;
  align-items: center;
  width:100%;
  max-width: 800px;

  gap: ${props => props.theme.spacing.xlarge};
  margin: ${props => props.theme.spacing.xlarge} 0;

  .transfer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${props => props.theme.spacing.xlarge};
    width:100%;

    & > div {
      label {
        margin-right: ${props => props.theme.spacing.medium}
      }
   
    }

    @media (max-width: 820px) {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 0 ${props => props.theme.spacing.large};

      & > div {
    
      display: flex;
      justify-content: space-between;
      align-items:center;
      width:100%;
    }

    }
  }


  button {
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.xlarge};
    display: flex;
    align-items: center;

    .loader {
      color: ${props => props.theme.gray[200]};
      animation: ${round} 1.7s infinite linear;
    }

  }
  

`;
