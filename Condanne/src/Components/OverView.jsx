import { FaDollarSign } from "react-icons/fa6";
import data from "../data/data.json";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./OverView.css";

function OverView() {
  const { current, income, expenses } = data.balance;

  return (
    <>
      <section className="overviewContainer">
        <h1 className="overViewHeader">OverView</h1>
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
      </section>
      <section className="extra">
        <Card1 />
        <Card2 />
      </section>
    </>
  );
}

export default OverView;
