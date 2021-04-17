import "./ExpenseItemStyle.css";
import ExpenseDateComponent from "./ExpenseDate";
import CardComponent from "./CardComponent";

function ExpensItemComFunction(props) {
  return (
    <CardComponent className="expense-item">
      {/* <div>{props.expenseDate.toISOString()}</div> */}
      <ExpenseDateComponent expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${props.expenseAmount}</div>
    </CardComponent>
  );
}

export default ExpensItemComFunction;
