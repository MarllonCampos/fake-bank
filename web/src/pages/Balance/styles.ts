import styled, { css, keyframes } from 'styled-components';
;

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

export const Container = styled.div`
  width: 100%; 
  max-width: 800px;
  height: 100%;
  margin: ${props => props.theme.spacing.xlarge} auto;
  margin-bottom:0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2,auto) 1fr;

  justify-content: space-between;
  .filter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: ${props => props.theme.spacing.large} auto;
    &__date {
      display: flex;
      align-items: center;
      gap: ${props => props.theme.spacing.medium}
    }
    @media (max-width: 790px) {
      padding: 0 ${props => props.theme.spacing.large};
    }
  }

  .cashout {
    display:block;
    width: 90%;
    text-align:center;

    padding: ${(props) => props.theme.spacing.medium} ${(props) => props.theme.spacing.large};
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.primary.dark};
    border-radius: ${props => props.theme.radius.medium};
    margin:${(props) => props.theme.spacing.large};
    margin-inline: auto;
    font-weight: bold;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: ${props => props.theme.textColorHover} ;
      color: ${props => props.theme.primary.dark};
    }
  }

  
`;

interface UserTransfersProps {
  empty: boolean
}
export const UserTransfers = styled.div<UserTransfersProps>`
  padding: ${(props) => props.theme.spacing.large} 8px;
  
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${(props) => props.theme.spacing.large};
  align-items: center;
  

  ${props =>
    props.empty && css`
      justify-content: center;
    `
  }

  .loader {
    color: ${props => props.theme.primary.dark};
    animation: ${round} 1.7s infinite linear;
  }

 



  .transfer {
    max-width: 170px;
    width: 100%;
    padding: ${(props) => props.theme.spacing.large};

    background-color: ${props => props.theme.primary.dark};
    color: white;
    border-radius: ${props => props.theme.radius.medium};
    transition: background-color 0.2s linear;
  

    .value {
      color: ${props => props.theme.success};
      display: flex;
      align-items: center;
      margin: 8px 0;
      gap: 4px;
    }
    .username {
      color: ${props => props.theme.success};
    }

    &.debited {
      color: ${props => props.theme.danger};
      .value {
        color: ${props => props.theme.danger};
        
      }
      .username {
        color: ${props => props.theme.danger};
        
      }
    }
    & >* {
      &::selection {
        background-color: transparent;
      }

    }
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.primary.light};
    }

    @media (max-width: 790px) {
      .username {
        font-size: 22px
      }
    }


  }
  

  .no-transfers {
    width: 100%;
    text-align: center;
    font-size: 48px;
    color: ${props => props.theme.gray[900]}
  }


`