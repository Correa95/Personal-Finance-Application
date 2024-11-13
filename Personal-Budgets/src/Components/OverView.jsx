import "./Overview.css";

function OverView() {
  return (
    <section className="overviewContainer">
      <div className="stats">
        <div className="card">
          <h1 className="title">Current Balance</h1>
        </div>
        <div className="card">
          <h1 className="title">Income</h1>
        </div>
        <div className="card">
          <h1 className="title">Expense</h1>
        </div>
      </div>
      <div className="extra">
        <div className="pot">
          <h1>Pots</h1>
          <button className="btn">See Details</button>
        </div>
        <div className="budget">
          <h1>Budgets</h1>
          <button className="btn">See Details</button>
        </div>
        <div className="transaction">
          <h1>Transaction</h1>
          <button className="btn">View All</button>
        </div>
        <div className="recurBill">
          <h1>Recurring Bills</h1>
          <button className="btn">See Details</button>
        </div>
      </div>
    </section>
  );
}

export default OverView;
