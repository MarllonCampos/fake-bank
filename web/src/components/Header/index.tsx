import { Container } from "./styles";
import { SignOut, CurrencyEth } from "phosphor-react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { logoutUser } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  function signoutAction() {
    logoutUser();
    return navigate("/");
  }
  const { balance, username } = useContext(UserContext);
  return (
    <Container>
      <div className="userInfo">
        <Link to="/myaccount" className="userInfo__username">
          <h1>{username}</h1>
        </Link>
        <p className="userInfo__balance">
          {balance}
          <CurrencyEth size={48} className="currency" />
        </p>
      </div>
      <SignOut className="signout" size={48} weight="bold" onClick={signoutAction} />
    </Container>
  );
}

export { Header };
