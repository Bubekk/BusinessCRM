import "../styles/BudgetPageStyle.scss";
import { useState } from "react";
import BudgetBar from "./BudgetBar";

function BudgetPage(props) {
  const isActive = props.activeComponent === "ProjectsPage";

  //variables for dummy budget chart
  const [budget, setBudget] = useState(32000);
  const [expenses, setExpenses] = useState(16000);
  const [hrExpenses, setHrExpenses] = useState(10000);
  const [maintanceExpenses, setMaintanceExpenses] = useState(3000);
  const [prExpenses, setPrExpenses] = useState(3000);

  //calculatin percentage of budget and all expenses
  const calculatePercentage = (total, value) => {
    const res = (value / total) * 100;
    return res.toFixed(2) + "%";
  };

  return (
    <div className="budgetpage" style={{ display: isActive ? "none" : "flex" }}>
      <div className="budgetpage-chart">
        <BudgetBar
          budget={budget}
          expenses={expenses}
          hrExpenses={hrExpenses}
          maintanceExpenses={maintanceExpenses}
          prExpenses={prExpenses}
          calculatePercentage={calculatePercentage}
        />
        <div className="budgetpage-chart-info">
          <p>HR: $8 000</p>
          <p>Maintaince: $5 000</p>
        </div>
      </div>
      <div className="budgetpage-historylog">
        <div className="budgetpage-historylog-log">
          <div className="budgetpage-gistorylog-log-header">
            <h2>what was payed</h2>
            <p>date when was payed</p>
          </div>
          <div className="budgetpage-gistorylog-log-content">
            <p>how much was payed</p>
            <p>how much was left after payed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;
