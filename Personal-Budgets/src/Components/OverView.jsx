import data from "../data/data.json";
import "./Overview.css";
import { FaDollarSign } from "react-icons/fa6";
// import { FaDollarSign, FaSackDollar } from "react-icons/fa6";

function OverView() {
  const { current, income, expenses } = data.balance;
  // const { avatar, name, amount, date } = data.transactions;

  return (
    <section className="overviewContainer">
      <div className="stats">
        <div className="card">
          <h1 className="title">Current Balance</h1>
          <h2 className="balance">
            <span>
              <FaDollarSign className="sign" />
            </span>
            {current}
          </h2>
        </div>
        <div className="card">
          <h1 className="title">Income</h1>
          <h2 className="balance">
            <FaDollarSign className="sign" />
            {income}
          </h2>
        </div>
        <div className="card">
          <h1 className="title">Expense</h1>
          <h2 className="balance">
            <FaDollarSign className="sign" />
            {expenses}
          </h2>
        </div>
      </div>
      {/* ////////////////////////////////////// */}
      <div className="extra">
        <div className="card1">
          {/* <div className="pot">
            <div className="top">
              <small className="btn">View All</small>
              <h1>Pots</h1>
            </div>
            <div className="expenditureContainer">
              <div className="totalSave">
                <div className="total">
                  <h1>Total Save</h1>
                  <h3>
                    <FaSackDollar />
                    <span>3000</span>
                  </h3>
                </div>
              </div>
              <div className="expenditure">
                <div className="saving">
                  <small>Saving</small>
                  <FaSackDollar />
                  <span>300</span>
                </div>
                <div className="gift">
                  <small>gift</small>
                  <FaSackDollar />
                  <span>150</span>
                </div>
                <div className="concert">
                  <small>Concert Tickets</small>
                  <FaSackDollar />
                  <span>50</span>
                </div>
                <div className="laptop">
                  <small>New Laptop</small>
                  <FaSackDollar />
                  <span>100</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* /////////////////////////////// */}
          <div className="transaction">
            <div className="top">
              <small className="btn">View All</small>
              <h1>Transaction</h1>
            </div>
            <div className="con">
              {data.transactions.slice(0, 6).map((transaction) => {
                return (
                  <>
                    <div className="imgName">
                      <img src={transaction.avatar} alt="avatar" />
                      <h4>{transaction.name}</h4>
                    </div>
                    <div className="dateAmount">
                      <h5>{transaction.amount}</h5>
                      <h4>{transaction.date}</h4>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="card2">
          <div className="budget">
            <div className="top">
              <h1>Budgets</h1>
            </div>
          </div>
          <div className="recurBill">
            <div className="top">
              <h1>Recurring Bills</h1>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default OverView;
