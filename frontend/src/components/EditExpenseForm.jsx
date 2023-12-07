/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const EditExpenseForm = ({ expense, onUpdate }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  useEffect(() => {
    // Update local state when the expense prop changes
    setDescription(expense.description);
    setAmount(expense.amount);
  }, [expense]);

  const handleUpdate = () => {
    // TODO: Implement update expense logic and call onUpdate callback
    onUpdate({
      ...expense,
      description,
      amount,
    });
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <form>
        <label>Description:</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Amount:</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='button' onClick={handleUpdate}>
          Update Expense
        </button>
      </form>
    </div>
  );
};

export default EditExpenseForm;
