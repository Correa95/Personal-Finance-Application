import "./Card2.css";

function Card2() {
  return (
    <div className="card2">
      <div className="budget">
        <div className="top">
          <h1>Budgets</h1>
        </div>
      </div>
      <div className="recurBills">
        <div className="top">
          <small className="btn">See All</small>
          <h1>Recurring Bills</h1>
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
