import "./ExpenseItemStyle.css";
import ExpenseDateComponent from "./ExpenseDate";

function ExpensItemComFunction(props) {
  return (
    <div className="expense-item">
      {/* <div>{props.expenseDate.toISOString()}</div> */}
      <ExpenseDateComponent expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${props.expenseAmount}</div>
    </div>
  );
}

export default ExpensItemComFunction;
