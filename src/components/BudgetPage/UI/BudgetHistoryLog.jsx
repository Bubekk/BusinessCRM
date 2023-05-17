import "../styles/BudgetHistoryLogStyle.scss";

function BudgetHistoryLog(props) {
    return (
        <div className="logcontainer">
            <div className="logcontainer-header">
                <h1>{props.title}</h1>
                <p> {props.date} </p>
            </div>
            <div className="logcontainer-content">
                <h2> $ {props.cost} </h2>
                <p> {props.group} </p>
            </div>
        </div>
    )
}

export default BudgetHistoryLog;