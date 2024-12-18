import data from "../data/data.json";
import { FaSackDollar } from "react-icons/fa6";

import "./Pots.css";

function Pots() {
  const { pots } = data.pots;
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);
  console.log(totalSaved); // Calculate total saved
  return (
    <div className="pots">
      <h1 className="title">Pots</h1>

      <div className="expenditureTain">
        {/* <div className="totalSave">
          <div className="total">
            <h1>Total Save</h1>
            <h3>
              <FaSackDollar />
              <span>3000</span>
            </h3>
          </div>
        </div> */}
        <div className="totalSave">
          <div className="total">
            <h1>Total Save</h1>
            <h3>
              <FaSackDollar />
              <span>{totalSaved.toFixed(2)}</span>
            </h3>
          </div>
        </div>
        {/* <div className="expense">
          <div className="sav">
            <small>Saving</small>
            <FaSackDollar />
            <span>300</span>
          </div>
          <div className="gif">
            <small>gift</small>
            <FaSackDollar />
            <span>150</span>
          </div>
          <div className="party">
            <small>Concert Tickets</small>
            <FaSackDollar />
            <span>50</span>
          </div>
          <div className="lap">
            <small>New Laptop</small>
            <FaSackDollar />
            <span>100</span>
          </div>
        </div> */}
        <div className="expense">
          {pots.map((pot, index) => (
            <div
              key={index}
              className={pot.name.toLowerCase().replace(/\s+/g, "-")}
              style={{
                borderLeft: `4px solid ${pot.theme}`, // Add theme color as left border
                paddingLeft: "8px", // Add padding for spacing
                marginBottom: "8px", // Add spacing between items
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
