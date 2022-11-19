import React from "react";
import { Link } from "react-router-dom";
import { Container, RightSideContainer } from "./styles";
import LeftSideAccount from "../../components/LeftSideAccount";
import UserForm from "../../components/UserForm";
import phone from "../../assets/phone.png";
const CreateAccount: React.FC = () => {
  return (
    <Container>
      <LeftSideAccount image={phone} />

      <RightSideContainer>
        <h1 className="title">&lt;NG.CASH&gt;</h1>

        <div className="login-box">
          <h3 className="login-box__title">
            Create an account
          </h3>
          <UserForm />

          <p className="login-box__login">
            Already have a account?{" "}
            <Link to="/">Log Now</Link>
          </p>
        </div>
      </RightSideContainer>
    </Container>
  );
};

export default CreateAccount;
