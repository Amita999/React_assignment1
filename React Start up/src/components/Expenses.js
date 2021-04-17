import ExpensItemComFunction from "./ExpenseItem";
import "./Expenses.css";
function ExpenseComponent(props) {
  return (
    <div classNAme="expenses">
      <ExpensItemComFunction
        expenseDate={props.items[0].expenseDate}
        expenseTitle={props.items[0].expenseTitle}
        expenseAmount={props.items[0].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={props.items[1].expenseDate}
        expenseTitle={props.items[1].expenseTitle}
        expenseAmount={props.items[1].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={props.items[2].expenseDate}
        expenseTitle={props.items[2].expenseTitle}
        expenseAmount={props.items[2].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={props.items[3].expenseDate}
        expenseTitle={props.items[3].expenseTitle}
        expenseAmount={props.items[3].expenseAmount}
      ></ExpensItemComFunction>
    </div>
  );
}

export default ExpenseComponent;
