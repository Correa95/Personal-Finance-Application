import data from "../data/data.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import "./Card2.css";

function Card2() {
  // Function to get the resolved color for a CSS variable
  const getCSSVariableColor = (variableName) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();

  const chartData = {
    labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
    datasets: [
      {
        data: data.budgets
          .filter((budget) =>
            ["Entertainment", "Bills", "Dining Out", "Personal Care"].includes(
              budget.category
            )
          )
          .map((budget) => budget.maximum),
        backgroundColor: [
          getCSSVariableColor("--saving-color"), // Matches .entertainmentAmount
          getCSSVariableColor("--gift-color"), // Matches .amountBill
          getCSSVariableColor("--laptop-color"), // Matches .dinningOut
          getCSSVariableColor("--concert-color"), // Matches .personalCare
        ],
        borderWidth: 0,
      },
    ],
  };
  ///////////////////////////////
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

  const { paidBills, upcomingBills, dueSoonBills } =
    calculateBills(transactions);

  return (
    <div className="card2">
      <div className="budget">
        <div className="top">
          <h1>Budgets</h1>
          <button className="btn">See Details</button>
        </div>
        <div className="container">
          <div className="chart">
            <Doughnut data={chartData} />
          </div>
          {/* /////////////// */}
          <div className="category">
            {data.budgets
              .filter((budget) =>
                [
                  "Entertainment",
                  "Bills",
                  "Dining Out",
                  "Personal Care",
                ].includes(budget.category)
              )

              .map((budget) => {
                switch (budget.category) {
                  case "Entertainment":
                    return (
                      <div
                        className="entertainmentAmount"
                        key={budget.category}
                      >
                        <h2 className="entertainment" key={budget.category}>
                          Entertainment
                        </h2>
                        <h2 className="amount">${budget.maximum}</h2>
                      </div>
                    );
                  case "Bills":
                    return (
                      <div className="amountBill" key={budget.category}>
                        <h2 className="bill">Bills</h2>
                        <h2 className="amount">${budget.maximum}</h2>
                      </div>
                    );
                  case "Dining Out":
                    return (
                      <div className="dinningOut" key={budget.category}>
                        <h2 className="dinning">Dining Out</h2>
                        <h2 className="out">${budget.maximum}</h2>
                      </div>
                    );
                  case "Personal Care":
                    return (
                      <div className="personalCare" key={budget.category}>
                        <h2 className="personal">Personal Care</h2>
                        <h2 className="care">${budget.maximum}</h2>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
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
    </div>
  );
}

export default Card2;
