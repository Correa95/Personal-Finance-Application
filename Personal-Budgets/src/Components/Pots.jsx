import { FaSackDollar } from "react-icons/fa6";

import "./Pots.css";

function Pots() {
  return (
    <div className="pots">
      <h1 className="title">Pots</h1>

      <div className="expenditureCon">
        <div className="totalSave">
          <div className="total">
            <h1>Total Save</h1>
            <h3>
              <FaSackDollar />
              <span>3000</span>
            </h3>
          </div>
        </div>
        <div className="expenditure">
          <div className="saving">
            <small>Saving</small>
            <FaSackDollar />
            <span>300</span>
          </div>
          <div className="gift">
            <small>gift</small>
            <FaSackDollar />
            <span>150</span>
          </div>
          <div className="concert">
            <small>Concert Tickets</small>
            <FaSackDollar />
            <span>50</span>
          </div>
          <div className="laptop">
            <small>New Laptop</small>
            <FaSackDollar />
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pots;
