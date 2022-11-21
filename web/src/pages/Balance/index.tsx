import { CurrencyEth, SpinnerGap } from "phosphor-react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes, RouteProps, Navigate, useNavigate, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import Transactions from "../../services/transactions";

import { Container, UserTransfers } from "./styles";

interface TransferObject {
  value: number;
  time: string;
  transactionType: string;
  username: string;
}

const Balance = () => {
  const navigate = useNavigate();
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const [transactions, setTransactions] = useState<Array<TransferObject>>([]);
  const [dateSelection, setDateSelection] = useState("");
  const [filter, setFilter] = useState("");

  const loadTransactions = async () => {
    setIsLoadingTransactions(true);
    try {
      const { status, ...data } = await Transactions.findAll({
        date: dateSelection,
        filter: filter ?? "",
      });
      if (status === 401) {
        navigate("/");
      }
      setTransactions(data.transactions as any);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingTransactions(false);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, [dateSelection, filter]);

  function handleDateSelection(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const [year, month, day] = value.split("-");
    const formattedYear = Number(year);
    const formattedMonth = Number(month) - 1;
    const formattedDay = Number(day);
    const dateSelectedObject = new Date(formattedYear, formattedMonth, formattedDay);
    if (dateSelectedObject > new Date()) {
      alert("Please select a valid date");
      return;
    }
    setDateSelection(value);
  }

  function handleFilter(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setFilter(value);
  }
  return (
    <Container>
      <div className="filter">
        <div className="filter__date">
          <label htmlFor="date">Date Filter:</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleDateSelection}
            min="2000-01-01"
            // value={dateSelection.toISOString().split("T")[0]}
            max={new Date().toISOString().split("T")[0]}
            defaultValue={""}
          />
        </div>

        <select name="filter" id="filter" onChange={handleFilter}>
          <option value="" defaultValue="">
            All
          </option>
          <option value="sent">Sent</option>
          <option value="received">Received</option>
        </select>
      </div>
      <Link to="cash-out" className="cashout">
        Cash-Out
      </Link>

      <UserTransfers empty={isLoadingTransactions || transactions?.length === 0}>
        {isLoadingTransactions ? (
          <SpinnerGap size={128} className="loader" />
        ) : transactions?.length === 0 ? (
          <h3 className="no-transfers">You dont have any transactions</h3>
        ) : (
          <>
            {transactions?.map((data) => (
              <Transfer {...data} />
            ))}
          </>
        )}
      </UserTransfers>
    </Container>
  );
};

function Transfer({ username, value, time, transactionType }: TransferObject) {
  const formattedTime = time.substring(0, 10);
  const debited = transactionType === "debited" ? " debited" : "";

  const cn = `transfer${debited && debited}`;
  return (
    <div className={cn}>
      <h2 className="username">{username}</h2>

      <p className="value">
        {value}
        <CurrencyEth size={18} />
      </p>
      <p>{formattedTime}</p>
    </div>
  );
}

export default Balance;
