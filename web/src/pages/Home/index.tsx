import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, RightSideContainer } from "./styles";
import LeftSideAccount from "../../components/LeftSideAccount";
import phoneTilted from "../../assets/phone-tilted.png";
import UserForm, { AccountObject } from "../../components/UserForm";
import User from "../../services/user";

import { Helmet } from "react-helmet";
import { UserContext } from "../../contexts/UserContext";
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateBalance, updateUsername } = useContext(UserContext);
  const navigate = useNavigate();
  async function handleSubmit(user: AccountObject) {
    try {
      setIsLoading(true);
      const { balance, username } = await User.login(user);
      updateBalance(balance);
      updateUsername(username);
      navigate("/myaccount");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Helmet>
        <title>Fake Bank | Login</title>
      </Helmet>
      <LeftSideAccount image={phoneTilted} />
      <RightSideContainer>
        {isLoading && <p>Loadingup</p>}
        <h1 className="title">&lt;NG.CASH&gt;</h1>
        <div className="login-box">
          <h3 className="login-box__title">Log with your credentials</h3>
          <UserForm onSubmit={handleSubmit} buttonDisabled={false} />
          <p className="login-box__create-account">
            Don't have a account? <Link to="create-account">Create Now</Link>
          </p>
        </div>
      </RightSideContainer>
    </Container>
  );
};

export default Home;
