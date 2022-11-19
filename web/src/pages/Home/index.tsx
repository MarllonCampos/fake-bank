import React from "react";
import { Link } from "react-router-dom";
import { Container, RightSideContainer } from "./styles";
import LeftSideAccount from "../../components/LeftSideAccount";
import phoneTilted from "../../assets/phone-tilted.png";
import UserForm from "../../components/UserForm";

const Home: React.FC = () => {
  return (
    <Container>
      <LeftSideAccount image={phoneTilted} />

      <RightSideContainer>
        <h1 className="title">&lt;NG.CASH&gt;</h1>

        <div className="login-box">
          <h3 className="login-box__title">
            Log with your credentials
          </h3>
          <UserForm />
          <p className="login-box__create-account">
            Don't have a account?{" "}
            <Link to="create-account">Create Now</Link>
          </p>
        </div>
      </RightSideContainer>
    </Container>
  );
};

export default Home;
