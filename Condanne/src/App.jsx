import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import OverView from "./Components/OverView";
import Transactions from "./Components/Transactions";
import Budgets from "./Components/Budgets";
import Pots from "./Components/Pots";
import RecurringBills from "./Components/RecurringBills";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <button
        className="hamburger"
        onClick={handleToggleSidebar}
        aria-label="Toggle menu"
        aria-expanded={isSidebarOpen}
      >
        ☰
      </button>

      <aside className={`side ${isSidebarOpen ? "open" : ""}`}>
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

      {isSidebarOpen && (
        <div className="overlay" onClick={handleToggleSidebar}></div>
      )}
    </div>
  );
}

export default App;
