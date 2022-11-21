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
    gap: ${props => props.theme.spacing.xlarge};

    & > div {
      label {
        margin-right: ${props => props.theme.spacing.medium}
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
