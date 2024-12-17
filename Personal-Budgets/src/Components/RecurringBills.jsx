import data from "../data/data.json";
import "./RecurringBills.css";
function RecurringBills() {
  const transactions = data.transactions;
  const calculateBills = (transactions) => {
    const today = new Date();

    const paidBills = transactions
      .filter(
        (transaction) =>
          transaction.category === "Bills" &&
          transaction.recurring &&
          new Date(transaction.date) < today
      )
      .reduce((acc, cur) => acc + Math.abs(cur.amount), 0);

    const upcomingBills = transactions
      .filter(
        (transaction) =>
          transaction.category === "Bills" &&
          transaction.recurring &&
          new Date(transaction.date) > today
      )
      .reduce((acc, cur) => acc + Math.abs(cur.amount), 0);

    const dueSoonBills = transactions
      .filter(
        (transaction) =>
          transaction.category === "Bills" &&
          !transaction.recurring &&
          new Date(transaction.date) >= today &&
          new Date(transaction.date) <=
            new Date(today.setDate(today.getDate() + 7))
      )
      .reduce((acc, cur) => acc + Math.abs(cur.amount), 0);

    return { paidBills, upcomingBills, dueSoonBills };
  };
  const { paidBills, upcomingBills, dueSoonBills } =
    calculateBills(transactions);
  return (
    <div className="recurBills">
      <h1 className="title">Recurring Bills</h1>

      <div className="bills">
        <div className="paidBills">
          <h2 className="paid">Paid Bills</h2>
          <h2 className="bill">$ {paidBills}</h2>
        </div>
        <div className="totalUpcoming">
          <h2 className="totalUp">Upcoming Bills</h2>
          <h2 className="upcoming">$ {upcomingBills}</h2>
        </div>
        <div className="dueSoon">
          <h2 className="due">Due Soon</h2>
          <h2 className="soon">$ {dueSoonBills}</h2>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;
