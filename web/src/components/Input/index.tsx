import styled from "styled-components";

export default styled.input`
  background-color: ${(props) => props.theme.themeColor};
  padding: ${(props) => props.theme.spacing.large};
  font-size: 14px;
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.spacing.medium};
  &::placeholder {
    color: ${(props) => props.theme.gray[200]};
  }
  outline: 0;
  &:focus {
    border-color: ${(props) => props.theme.primary.dark};
  }
`;
