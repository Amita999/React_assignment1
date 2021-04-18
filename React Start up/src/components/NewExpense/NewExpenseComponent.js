import React from "react";
import ExpenseForm from "./NewExpenseForm";
import "./NewExpenseComponent.css";

const NewExpenseComponent = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpenseComponent;
