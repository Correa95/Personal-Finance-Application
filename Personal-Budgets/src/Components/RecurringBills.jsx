import data from "../data/data.json";
import "./RecurringBills.css";
function RecurringBills() {
  const transactions = data.transactions;
  const calculateBills = (transactions) => {
    const today = new Date();

    const paidBills = transactions
      .filter(
        (t) => t.category === "Bills" && t.recurring && new Date(t.date) < today
      )
      .reduce((acc, t) => acc + Math.abs(t.amount), 0);

    const upcomingBills = transactions
      .filter(
        (t) => t.category === "Bills" && t.recurring && new Date(t.date) > today
      )
      .reduce((acc, t) => acc + Math.abs(t.amount), 0);

    const dueSoonBills = transactions
      .filter(
        (t) =>
          t.category === "Bills" &&
          !t.recurring &&
          new Date(t.date) >= today &&
          new Date(t.date) <= new Date(today.setDate(today.getDate() + 7))
      )
      .reduce((acc, t) => acc + Math.abs(t.amount), 0);

    return { paidBills, upcomingBills, dueSoonBills };
  };
  return (
    <div className="recurBills">
      <div className="top">
        <h1>Recurring Bills</h1>
        <button className="btn">See All</button>
      </div>

      <div className="bills">
        <div className="paidBills">
          <h2 className="paid">Paid Bills</h2>
          <h2 className="bill">${paidBills}</h2>
        </div>
        <div className="totalUpcoming">
          <h2 className="totalUp">Upcoming Bills</h2>
          <h2 className="upcoming">${upcomingBills}</h2>
        </div>
        <div className="dueSoon">
          <h2 className="due">Due Soon</h2>
          <h2 className="soon">${dueSoonBills}</h2>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;
