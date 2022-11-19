import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-top: ${props => props.theme.spacing.large};
  
  
  input + input {
    margin-top: ${props => props.theme.spacing.large};

  }

  .submit {
    margin-top: ${props => props.theme.spacing.xlarge};

  }

   
`;
