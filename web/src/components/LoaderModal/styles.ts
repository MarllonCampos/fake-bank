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

export const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);

  position: absolute;
  inset:0;

  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width:100%;
  max-width: 300px;
  aspect-ratio:1/1;

  background: ${props => props.theme.textColor};
  border-radius:${props => props.theme.radius.large};

  box-shadow:  0 4px 10px rgba(0,0,0,0.04);

  display: flex;
  justify-content: center;
  align-items: center;


  .loader {
      color: ${props => props.theme.gray[900]};
      animation: ${round} 1.7s infinite linear;
    }
`;

