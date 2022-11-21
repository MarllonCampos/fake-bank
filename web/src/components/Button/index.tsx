import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => props.theme.primary.dark};
  padding: ${(props) => props.theme.spacing.medium};
  font-size: 16px;
  font-weight: bold;

  border-radius: ${(props) => props.theme.spacing.medium};
  color: ${(props) => props.theme.gray[100]};
  outline: 0;
  border: 2px solid transparent;

  &:focus {
    border-color: ${(props) => props.theme.primary.light};
  }

  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primary.main};
  }

  &:disabled {
    background: ${(props) => props.theme.gray[100]};
    color: ${(props) => props.theme.gray[200]};
    cursor: auto;

    &:hover {
      background: ${(props) => props.theme.gray[200]};
      color: ${(props) => props.theme.gray[100]};
    }
  }
`;
