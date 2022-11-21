import { CurrencyEth } from "phosphor-react";
import { Link } from "react-router-dom";
import { Route, Routes, RouteProps, Navigate, useNavigate, Outlet } from "react-router-dom";
import Button from "../../components/Button";

import { Container } from "./styles";

const Balance = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="filter">
        <div className="filter__date">
          <label htmlFor="date">Date Filter:</label>
          <input type="date" name="date" id="date" />
        </div>

        <select name="" id="">
          <option value="" defaultValue="">
            Todos
          </option>
          <option value="sent">Sent</option>
          <option value="received">Received</option>
        </select>
      </div>
      <Link to="cash-out" className="cashout">
        Cash-Out
      </Link>

      <div className="userTransfers">
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
        <Transfer user="Nome" value={3} />
      </div>
    </Container>
  );
};

interface TransferProps {
  user: string;
  value: string | number;
}
function Transfer({ user, value }: TransferProps) {
  return (
    <div className="userTransfers__transfer">
      <h2 className="username">Coming From</h2>

      <p className="value">
        <CurrencyEth size={24} />
        Value
      </p>
      <p>22/10/2022</p>
    </div>
  );
}

export default Balance;
