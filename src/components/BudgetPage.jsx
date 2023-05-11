import "../styles/BudgetPageStyle.scss";
import { useEffect, useState } from "react";
import BudgetBar from "./BudgetBar";
import BudgetHistoryLog from "./BudgetHistoryLog";
import toast, { Toaster } from "react-hot-toast";

function BudgetPage(props) {
  const isActive = props.activeComponent === "ProjectsPage";

  //Adding toast alert to page after the budget is below zero
  const debtAlert = () => toast.error("Watch out! You're in debt!", {
    position: "top-center",
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    })

  //variables for budget chart
  const [budget, setBudget] = useState(32000);
  const [hrExpenses, setHrExpenses] = useState(0);
  const [maintanceExpenses, setMaintanceExpenses] = useState(0);
  const [prExpenses, setPrExpenses] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budgetLeft, setBudgetLeft] = useState(0);

  //re-rendering and calculating expenses and budget
  useEffect(() => {
    setExpenses(hrExpenses + prExpenses + maintanceExpenses);
    setBudgetLeft(budget - expenses);
    if (budgetLeft < 0) {
      debtAlert();
    }
  });

  //calculatin percentage of budget and all expenses
  const calculatePercentage = (total, value) => {
    const res = (value / total) * 100;
    return res.toFixed(2) + "%";
  };

  //Showing and hiding form after clicking button
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  //Form variables
  const [tempLogs, setTempLogs] = useState([
    {
      id: 0,
      logName: "Zapłata niewolnikom",
      logDate: "May 10, 2023",
      logCost: 10000,
      logExpGroup: "HR",
    },
    {
      id: 1,
      logName: "TVP reklama 'Gdzie te dzieci?'",
      logDate: "May 05, 2023",
      logCost: 3000,
      logExpGroup: "PR",
    },
    {
      id: 2,
      logName: "Srajtaśma i owocowe czwartki",
      logDate: "May 09, 2023",
      logCost: 3000,
      logExpGroup: "MAINTANCE",
    },
  ]);
  const [transactionName, setTransactionName] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionCost, setTransactionCost] = useState(0);
  const [transactionExpGroup, setTransactionExpGroup] = useState("");
  const [id, setId] = useState(3);

  //handling form submit (adding log)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      id: id,
      logName: transactionName,
      logDate: transactionDate,
      logCost: parseFloat(transactionCost),
      logExpGroup: transactionExpGroup,
    };
    setId(id + 1);
    setTempLogs([...tempLogs, newLog]);
    calculateTransactionCost(newLog.logExpGroup, newLog.logCost);
  };

  //calculating transaction cost on budget
  const calculateTransactionCost = (group, cost) => {
    switch (group) {
      case "HR":
        setHrExpenses(hrExpenses + cost);
        break;
      case "MAINTANCE":
        setMaintanceExpenses(maintanceExpenses + cost);
        break;
      case "PR":
        setPrExpenses(prExpenses + cost);
        break;
      default:
        setHrExpenses(hrExpenses + cost);
        break;
    }
  };

  //rendering logs
  const renderedLogs = tempLogs.map((log) => (
    <BudgetHistoryLog
      key={log.id}
      title={log.logName}
      date={log.logDate}
      cost={log.logCost}
      group={log.logExpGroup}
    />
  ));

  return (
    <div className="budgetpage" style={{ display: isActive ? "none" : "flex" }}>
      <Toaster />
      <div className="budgetpage-chart">
        <BudgetBar
          budget={budget}
          budgetLeft={budgetLeft}
          expenses={expenses}
          hrExpenses={hrExpenses}
          maintanceExpenses={maintanceExpenses}
          prExpenses={prExpenses}
          calculatePercentage={calculatePercentage}
        />
        <div className="budgetpage-chart-info">
          <p className="budgetpage-chart-info-bartag budget">
            BUDGET: $ {budget}
          </p>
          <p className="budgetpage-chart-info-bartag budgetleft">
            BUDGET LEFT: $ {budgetLeft}
          </p>
          <p className="budgetpage-chart-info-bartag hr">HR: $ {hrExpenses} </p>
          <p className="budgetpage-chart-info-bartag maintance">
            MAINTANCE: $ {maintanceExpenses}
          </p>
          <p className="budgetpage-chart-info-bartag pr">PR: $ {prExpenses} </p>
        </div>
      </div>
      <div className="budgetpage-add">
        <button
          className="budgetpage-add-button"
          onClick={handleShowForm}
          // style={{ display: showForm ? "none" : "block" }}
        >
          +
        </button>
        <form
          className="budgetpage-add-form"
          style={{ display: showForm ? "flex" : "none" }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            placeholder="Title of transaction"
          />
          <input
            type="date"
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
          />
          <input
            type="number"
            value={transactionCost}
            onChange={(e) => setTransactionCost(e.target.value)}
            placeholder="cost"
          />
          <select
            name="exp-group"
            value={transactionExpGroup}
            onChange={(e) => setTransactionExpGroup(e.target.value)}
            id="exp-group"
          >
            <option value="HR">HR</option>
            <option value="MAINTANCE">MAINTANCE</option>
            <option value="PR">PR</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="budgetpage-historylog">{renderedLogs}</div>
    </div>
  );
}

export default BudgetPage;
