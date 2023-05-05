import "../styles/BudgetBarStyle.scss";

function BudgetBar(props) {
  return (
    <div className="chart-bar">
      <div className="chart-bar-budget">Budget</div>
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
        >
          HR
        </div>
        <div
          className="chart-bar-expenses-pr"
          style={{
            width: props.calculatePercentage(props.expenses, props.prExpenses),
          }}
        >
          PR
        </div>
        <div
          className="chart-bar-expenses-maintance"
          style={{
            width: props.calculatePercentage(
              props.expenses,
              props.maintanceExpenses
            ),
          }}
        >
          Maintance
        </div>
      </div>
    </div>
  );
}

export default BudgetBar;
