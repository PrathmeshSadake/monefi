/* eslint-disable react/prop-types */
import  { useState } from "react";

const AddExpenseForm = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    onAdd({
      description,
      amount,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Expense</h2>
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
        <button type='button' onClick={handleAdd}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
