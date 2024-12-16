import "./Card1.css";
import { FaSackDollar } from "react-icons/fa6";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

function Card1() {
  const navigate = useNavigate();
  // const { avatar, name, amount, date } = data.transactions;

  return (
    <div className="card1">
      <div className="pot">
        <div className="top">
          <h1>Pots</h1>
          <button className="btn" onClick={() => navigate("/pots")}>
            View All
          </button>
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
      </div>
      {/* /////////////////////////////// */}
      <div className="transaction">
        <div className="top">
          <h1>Transaction</h1>
          <button className="btn" onClick={() => navigate("/transaction")}>
            View All
          </button>
        </div>
        <div className="con">
          {data.transactions.slice(0, 5).map((transaction) => {
            const formattedDate = new Date(transaction.date).toLocaleDateString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <>
                <div className="cla">
                  <div className="imgName">
                    <img src={transaction.avatar} alt="avatar" />
                    <h4>{transaction.name}</h4>
                  </div>
                  <div className="dateAmount">
                    <h4>$ {transaction.amount}</h4>
                    <h5>{formattedDate}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card1;
