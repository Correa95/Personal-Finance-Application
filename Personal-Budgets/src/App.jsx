import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import OverView from "./Components/OverView";
import Transactions from "./Components/Transactions";
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
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurringBill" element={<RecurringBills />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
