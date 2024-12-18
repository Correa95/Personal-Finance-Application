import { Link } from "react-router-dom";

import "./SideBar.css";
function SideBar() {
  return (
    <aside className="sideBar">
      {/* <div className="logoContainer"> */}
      <h1 className="logo">Condanne</h1>
      {/* </div> */}
      <nav>
        <ul>
          <li>
            <Link className="customLink" to="/">
              Overview
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/transaction">
              Transactions
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/budgets">
              Budgets
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/pots">
              Pots
            </Link>
          </li>
          <li>
            <Link className="customLink" to="/recurringBills">
              Recurring Bills
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
