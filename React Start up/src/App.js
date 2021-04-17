// import ExpensItemComFunction from "./components/ExpenseItem";
import ExpenseComponent from "./components/Expenses";
function App() {
  let expenseItemArray = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 800,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Repairs",
      expenseAmount: 1800,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Servicing",
      expenseAmount: 500,
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Fuel Expenditure",
      expenseAmount: 300,
    },
  ];
  return <ExpenseComponent items={expenseItemArray} />;
}

export default App;
