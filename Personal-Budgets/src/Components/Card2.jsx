import "./Card2.css";

function Card2() {
  return (
    <div className="card2">
      <div className="budget">
        <div className="top">
          <h1>Budgets</h1>
          <button className="btn">See Details</button>
        </div>
        <div className="container">
          <div className="chart"></div>
          {/* /////////////// */}
          <div className="category">
            <div className="entertainmentAmount">
              <h2 className="entertainment">mathew</h2>
              <h2 className="amount">10000</h2>
            </div>
            <div className="amountBill">
              <h2 className="bill">mario</h2>
              <h2 className="amount">10000</h2>
            </div>
            <div className="dinningOut">
              <h2 className="dinning">correa</h2>
              <h2 className="out">10000</h2>
            </div>
            <div className="personalCare">
              <h2 className="personal">correa</h2>
              <h2 className="care">10000</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="recurBills">
        <div className="top">
          <h1>Recurring Bills</h1>
          <button className="btn">See All</button>
        </div>
        <div className="bills">
          <div className="paidBills">
            <h2 className="paid">mathew</h2>
            <h2 className="bill">10000</h2>
          </div>
          <div className="totalUpcoming">
            <h2 className="totalUp">mario</h2>
            <h2 className="upcoming">10000</h2>
          </div>
          <div className="dueSoon">
            <h2 className="due">correa</h2>
            <h2 className="soon">10000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
