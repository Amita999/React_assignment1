import ExpensItemComFunction from "./components/ExpenseItem";
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
  return (
    <div>
      <ExpensItemComFunction
        expenseDate={expenseItemArray[0].expenseDate}
        expenseTitle={expenseItemArray[0].expenseTitle}
        expenseAmount={expenseItemArray[0].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={expenseItemArray[1].expenseDate}
        expenseTitle={expenseItemArray[1].expenseTitle}
        expenseAmount={expenseItemArray[1].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={expenseItemArray[2].expenseDate}
        expenseTitle={expenseItemArray[2].expenseTitle}
        expenseAmount={expenseItemArray[2].expenseAmount}
      ></ExpensItemComFunction>
      <ExpensItemComFunction
        expenseDate={expenseItemArray[3].expenseDate}
        expenseTitle={expenseItemArray[3].expenseTitle}
        expenseAmount={expenseItemArray[3].expenseAmount}
      ></ExpensItemComFunction>
    </div>
  );
}

export default App;
