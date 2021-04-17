import ExpensItemComFunction from "./ExpenseItem";
import Card from "./CardComponent";
import "./Expenses.css";
function ExpenseComponent(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default ExpenseComponent;
