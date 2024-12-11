import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import OverView from "./Components/OverView";
import Transaction from "./Components/Transaction";
import Budgets from "./Components/Budgets";
import Pots from "./Components/Pots";
import RecurringBills from "./Components/RecurringBills";
import "./App.css";
function App() {
  return (
    <div className="app">
      <aside className="side">
        <SideBar />
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<OverView />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurringBills" element={<RecurringBills />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
