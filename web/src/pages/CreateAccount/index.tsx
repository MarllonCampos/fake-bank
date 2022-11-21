import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, RightSideContainer } from "./styles";
import LeftSideAccount from "../../components/LeftSideAccount";
import UserForm, { AccountObject } from "../../components/UserForm";
import phone from "../../assets/phone.png";
import { Helmet } from "react-helmet";
import User from "../../services/user";
import { UserContext } from "../../contexts/UserContext";
const CreateAccount: React.FC = () => {
  const navigate = useNavigate();
  const { updateBalance, updateUsername } = useContext(UserContext);
  const handleSubmit = async (user: AccountObject) => {
    try {
      const { balance, username } = await User.createUser(user);
      updateBalance(balance);
      updateUsername(username);
      navigate("/myaccount");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Fake Bank | Create Account</title>
      </Helmet>

      <LeftSideAccount image={phone} />

      <RightSideContainer>
        <h1 className="title">&lt;&lt;NG.CASH&gt;&gt;</h1>

        <div className="login-box">
          <h3 className="login-box__title">Create an account</h3>
          <UserForm onSubmit={handleSubmit} />

          <p className="login-box__login">
            Already have a account? <Link to="/">Log Now</Link>
          </p>
        </div>
      </RightSideContainer>
    </Container>
  );
};

export default CreateAccount;
