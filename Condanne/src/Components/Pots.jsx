import data from "../data/data.json";
import { FaSackDollar } from "react-icons/fa6";
import "./Pots.css";

function Pots() {
  const pots = data.pots;
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);

  return (
    <div className="pots">
      <h1 className="title">Pots</h1>

      <div className="expenditureTain">
        <div className="totalSave">
          <div className="total">
            <h1>Total Save</h1>
            <h3>
              <FaSackDollar />
              <span>{totalSaved.toFixed(2)}</span>
            </h3>
          </div>
        </div>

        <div className="expense">
          {pots.map((pot, index) => (
            <div
              key={index}
              className={pot.name.toLowerCase().replace(/\s+/g, "-")}
              style={{
                borderLeft: `4px solid ${pot.theme}`,

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
  );
}

export default Pots;
