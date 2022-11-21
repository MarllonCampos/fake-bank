import styled from 'styled-components';

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

  .userTransfers {
    padding: ${(props) => props.theme.spacing.large} ${(props) => props.theme.spacing.xlarge};
    
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: ${(props) => props.theme.spacing.large};
    
    &__transfer {
      max-width: 200px;
      padding: ${(props) => props.theme.spacing.large};

      background-color: ${props => props.theme.primary.light};
      color: white;
      border-radius: ${props => props.theme.radius.medium};
    }
    



  }
`;
