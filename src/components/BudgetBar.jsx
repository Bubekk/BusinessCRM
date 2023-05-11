import "../styles/BudgetBarStyle.scss";

function BudgetBar(props) {
  return (
    <div className="chart-bar">
      <div
        className="chart-bar-budget"
        style={{
          width: props.expenses === 0 ? "100%" : props.budgetLeft < 0 ? "0" : props.calculatePercentage(props.budget, props.budgetLeft)
        }}
      ></div>
      <div
        className="chart-bar-expenses"
        style={{
          width: props.calculatePercentage(props.budget, props.expenses),
        }}
      >
        <div
          className="chart-bar-expenses-hr"
          style={{
            width: props.calculatePercentage(props.expenses, props.hrExpenses),
          }}
        ></div>
        <div
          className="chart-bar-expenses-pr"
          style={{
            width: props.calculatePercentage(props.expenses, props.prExpenses),
          }}
        ></div>
        <div
          className="chart-bar-expenses-maintance"
          style={{
            width: props.calculatePercentage(
              props.expenses,
              props.maintanceExpenses
            ),
          }}
        ></div>
      </div>
    </div>
  );
}

export default BudgetBar;
