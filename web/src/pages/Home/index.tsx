import React from "react";

import {
  Container,
  LeftSideContainer,
  RightSideContainer,
} from "./styles";
import phone from "../../assets/phone.png";
const Home: React.FC = () => {
  return (
    <Container>
      <LeftSideContainer>
        <img src={phone} alt="A smartphone tilted" />
      </LeftSideContainer>
      <RightSideContainer></RightSideContainer>
    </Container>
  );
};

export default Home;
