import styled from 'styled-components';
export const Container = styled.div`
  --gap:${props => props.theme.spacing.xxlarge};
  --font-size: 48px;

  max-width: 800px;
  width: 100%;
  margin-inline: auto;
  padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xlarge};
  border-radius: ${props => props.theme.radius.xlarge};
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);

  background-color: ${props => props.theme.primary.dark};
  color:${props => props.theme.gray[100]};
  .userInfo {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;

    &__username {
      font-size: var(--font-size);
    }

    &__balance { 
      font-size: var(--font-size);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${props => props.theme.spacing.medium}
    }
    .currency {
      width: var(--font-size);
      height: var(--font-size);
    }
    
  }
  
  .signout {
    cursor:pointer;
    margin-left: auto;
    width: var(--font-size);
    height: var(--font-size);
  }

  @media (max-width: 790px) {
    --font-size: 24px;
    --gap: ${props => props.theme.spacing.large}
  }
`;
