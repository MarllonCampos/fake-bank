import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-top: ${props => props.theme.spacing.large};
  
  

  input {
    &:selection{
      background-color: transparent;
    }

    &:placeholder:selection {
      background-color: transparent
    }
  } 

  .submit {
    margin-top: ${props => props.theme.spacing.xlarge};
    &:selection{
      background-color: transparent;
      color: transparent
    }
  }


 .password-holder {
    position: relative; 
    margin-top: ${props => props.theme.spacing.large};
    input {
       width: 100%;
    } 

  } 

  .eye-icon {
    cursor: pointer;
 
    position: absolute;
    right: 0;
    top: 50%;

    transform: translate(-50%, -50%);
  }
   
`;
