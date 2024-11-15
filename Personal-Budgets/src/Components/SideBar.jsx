import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./SideBar.css";
function SideBar() {
  return (
    <aside className="sideBar">
      <div className="logoContainer">
        <GiHamburgerMenu className="hamburgerMenu" />
        <h1 className="logo">Condanne</h1>
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
