import data from "../data/data.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import "./Budgets.css";
function Budgets() {
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
  return (
    <div className="budgets">
      <h1 className="title">Budgets</h1>

      <div className="containerDiagram">
        <div className="chart">
          <Doughnut data={chartData} />
        </div>
        {/* /////////////// */}
        <div className="categories">
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
                    <div className="entertainmentAmount" key={budget.category}>
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
  );
}

export default Budgets;
