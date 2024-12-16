import data from "../data/data.json";
import "./Transaction.css";
function Transaction() {
  return (
    <div className="transactions">
      <h1 className="title">Transaction</h1>

      <div className="con">
        {data.transactions.slice(0, 10).map((transaction) => {
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
  );
}

export default Transaction;
