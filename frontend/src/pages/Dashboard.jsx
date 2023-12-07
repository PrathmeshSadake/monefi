import { useState } from "react";
import ExpenseList from "../components/Expense/ExpenseList";
import AddExpenseForm from "../components/Expense/AddExpenseForm";
import EditExpenseForm from "../components/Expense/EditExpenseForm";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setEditingExpense(null);
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div>
      <h1>Expense Tracker Dashboard</h1>
      <ExpenseList
        expenses={expenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />
      {editingExpense ? (
        <EditExpenseForm
          expense={editingExpense}
          onUpdate={handleUpdateExpense}
        />
      ) : (
        <AddExpenseForm onAdd={handleAddExpense} />
      )}
    </div>
  );
};

export default Dashboard;
