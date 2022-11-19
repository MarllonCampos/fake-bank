import React from "react";
import { Link } from "react-router-dom";
import { Container, RightSideContainer } from "./styles";
import LeftSideAccount from "../../components/LeftSideAccount";
const CreateAccount: React.FC = () => {
  return (
    <Container>
      <LeftSideAccount />

      <RightSideContainer>
        <h1 className="title">&lt;NG.CASH&gt;</h1>

        <div className="login-box">
          <h3 className="login-title">Create an account</h3>
          <input type="text" />
          <input type="text" />
          <button>Sign In</button>

          <p>
            Don't have a account?{" "}
            <Link to="create-account">Create Now</Link>
          </p>
        </div>
      </RightSideContainer>
    </Container>
  );
};

export default CreateAccount;
