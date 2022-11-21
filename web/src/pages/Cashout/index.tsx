import { CircleNotch } from "phosphor-react";
import { useContext, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/LoaderModal";
import { UserContext } from "../../contexts/UserContext";
import Transactions from "../../services/transactions";
import { updateLocalStorage } from "../../utils/localStorage";

import { Container } from "./styles";

interface FormElements extends HTMLFormControlsCollection {
  creditedUsername: HTMLInputElement;
  value: HTMLInputElement;
}

const Cashout = () => {
  const navigate = useNavigate();
  const { updateBalance, balance } = useContext(UserContext);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsTransactionLoading(true);

      const {
        creditedUsername: { value: creditedUsername },
        value: { value: value },
      } = event.currentTarget.elements as FormElements;

      if (!creditedUsername) {
        alert("Username, cant be empty");
        return;
      }
      if (!value) {
        alert("Value, cant be empty");
        return;
      }
      if (Number(value) > balance) {
        alert("Insufficienty funds");
        return;
      }

      const { status, message, newBalance } = await Transactions.store({ creditedUsername, value });
      updateBalance(newBalance);
      updateLocalStorage({ key: "balance", value: newBalance });
      alert(message);
    } catch ({ message, status, requestSuccess }) {
      console.log(message, "catch");
      alert(message);
    } finally {
      setIsTransactionLoading(false);
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <div className="transfer">
        <div className="user">
          <label htmlFor="creditedUsername">Transfer to:</label>
          <Input type="text" name="creditedUsername" id="creditedUsername" placeholder="userAbc" />
        </div>
        <div className="value">
          <label htmlFor="value">Value:</label>
          <Input type="number" name="value" id="value" placeholder="4" />
        </div>
      </div>
      <Button type="submit" disabled={isTransactionLoading}>
        {isTransactionLoading ? <CircleNotch size={24} className="loader" /> : "Send Money"}
      </Button>
    </Container>
  );
};

export default Cashout;
