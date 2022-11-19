import React from "react";

import { Container } from "./styles";
import phone from "../../assets/phone.png";

const LeftSideAccount: React.FC = () => {
  return (
    <Container>
      <img src={phone} alt="A smartphone tilted" />
    </Container>
  );
};

export default LeftSideAccount;
