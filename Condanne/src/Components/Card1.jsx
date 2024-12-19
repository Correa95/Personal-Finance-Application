import "./Card1.css";
import { FaSackDollar } from "react-icons/fa6";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

function Card1() {
  const navigate = useNavigate();
  const pots = data.pots;
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);
  console.log(totalSaved);

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
                <span>{totalSaved.toFixed(2)}</span>
              </h3>
            </div>
          </div>

          <div className="expenditure">
            {pots.slice(0, 3).map((pot, index) => (
              <div
                key={index}
                className={pot.name.toLowerCase().replace(/\s+/g, "-")}
                style={{
                  borderLeft: `10px solid ${pot.theme}`,
                  padding: "10px",
                  textalign: "center",
                  paddingLeft: "8px",
                  marginBottom: "8px",
                }}
              >
                <small>{pot.name}</small>
                <FaSackDollar />
                <span>{pot.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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
