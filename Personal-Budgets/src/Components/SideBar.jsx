import "./SideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <aside className="sideBar">
      <div className="logo">
        <h1>Condanne</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/transaction">Transactions</Link>
          </li>
          <li>
            <Link to="/budgets">Budgets</Link>
          </li>
          <li>
            <Link to="/pots">Pots</Link>
          </li>
          <li>
            <Link to="/recurringBills">Recurring Bills</Link>
          </li>
        </ul>
      </nav>
      <div className="min">
        <button>Minimize Menu</button>
      </div>
    </aside>
  );
}

export default SideBar;
