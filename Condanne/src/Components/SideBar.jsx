import { Link } from "react-router-dom";

import "./SideBar.css";
function SideBar() {
  return (
    <aside className="sideBar">
      <h1 className="logo">Condanne</h1>

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
            <Link className="customLink" to="/recurringBill">
              Recurring Bills
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
